# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the Vite application files from your local directory to the container
COPY dist/ .

# Install a simple HTTP server for serving the static files
RUN npm install -g http-server

# Expose the port the server will run on
EXPOSE 8080

# Define the command to start the HTTP server
CMD [ "http-server", "." ]
