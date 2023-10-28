from flask import Flask, render_template, request, redirect, url_for
from google.cloud import storage, firestore
from datetime import timedelta
import os
import uuid

app = Flask(__name__)

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./key.json"

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Initialize Google Cloud Storage client with service account credentials
storage_client = storage.Client.from_service_account_json('key.json')

# Specify the name of your Google Cloud Storage bucket
bucket_name = '# Replace with your GCS bucket name '  
bucket = storage_client.get_bucket(bucket_name)

# Initialize Google Cloud Firestore client
db = firestore.Client()

def get_file_extension(filename):
    return os.path.splitext(filename)[1]

app.jinja_env.filters['get_file_extension'] = get_file_extension

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def generate_unique_filename(filename):
    # Generate a unique filename by appending a UUID to the original filename
    unique_id = str(uuid.uuid4())
    file_name, file_extension = os.path.splitext(filename)
    return f"{file_name}_{unique_id}{file_extension}"

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' in request.files:
            file = request.files['file']
            if file and allowed_file(file.filename):
                original_filename = file.filename  # Store the original filename
                filename = generate_unique_filename(file.filename)

                # Upload the file to Google Cloud Storage
                blob = bucket.blob(filename)
                blob.upload_from_file(file)

                # Calculate the size of the uploaded file
                file.seek(0, os.SEEK_END)
                file_metadata = {
                    'filename': original_filename,  # Use the original filename here
                    'location': f'gs://{bucket_name}/{filename}',
                    'size': file.tell()  # Get the size of the uploaded file
                }
                doc_ref = db.collection('files').add(file_metadata)

    # Retrieve metadata from Firestore
    file_metadata = db.collection('files').stream()
    files = [
        {
            'filename': metadata.to_dict()['filename'],
            'location': metadata.to_dict()['location']
        }
        for metadata in file_metadata
    ]

    return render_template('index.html', files=files)

@app.route('/metadata/<filename>')
def show_metadata(filename):
    metadata = None  # Initialize the metadata variable
    # Fetch the metadata from Firestore based on the filename
    file_ref = db.collection('files').where('filename', '==', filename).stream()

    # Assuming there is only one document for a given filename
    for doc in file_ref:
        metadata = doc.to_dict()

    # Construct the file URL
    file_url = f'gs://{bucket_name}/{filename}'

    return render_template('metadata.html', metadata=metadata, file_url=file_url)

@app.route('/download/<filename>')
def download_file(filename):
    # Fetch the actual filename from Firestore based on the original filename
    actual_filename = None  # Initialize the actual filename variable
    file_ref = db.collection('files').where('filename', '==', filename).stream()

    # Assuming there is only one document for a given filename
    for doc in file_ref:
        actual_filename = doc.to_dict()['location'].split('/')[-1]
    if not actual_filename:
        # Handle the case where the file doesn't exist in Firestore
        return "Error: File not found.", 404
    # Generate a signed URL for the download link using the actual filename
    blob = bucket.blob(actual_filename)
    signed_url = blob.generate_signed_url(
        version='v4',
        expiration=timedelta(minutes=30),  # Adjust the expiration time as needed
        method='GET'
    )
    return redirect(signed_url)

@app.route('/delete/<filename>', methods=['GET'])
def delete_file(filename):
    # Fetch the actual filename from Firestore based on the display filename
    actual_filename = None
    docs_to_delete = []

    file_ref = db.collection('files').where('filename', '==', filename).stream()

    for doc in file_ref:
        actual_filename = doc.to_dict()['location'].split('/')[-1]
        docs_to_delete.append(doc.reference)

    if not actual_filename:
        app.logger.error(f"File {filename} not found in Firestore.")
        return "Error: File metadata not found.", 404

    # Delete the file from Google Cloud Storage
    blob = bucket.blob(actual_filename)
    if blob.exists():
        blob.delete()
    else:
        app.logger.warning(f"File {actual_filename} does not exist in the bucket. Skipping deletion.")

    # Delete the metadata from Firestore
    for doc_ref in docs_to_delete:
        doc_ref.delete()

    # Check to confirm if the file metadata has been deleted from Firestore
    file_ref_check = db.collection('files').where('filename', '==', filename).stream()
    if any(file_ref_check):
        app.logger.error(f"Failed to delete metadata for {filename} from Firestore.")
        return "Error: Failed to delete metadata.", 500

    return redirect(url_for('upload_file'))

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))