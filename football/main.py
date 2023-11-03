# Import Libraries
import requests
import pandas as pd
from flask import Flask, render_template_string
import warnings
warnings.filterwarnings('ignore')


# Create a Flask application
app = Flask(__name__)

# URL for the Fantasy Premier League API
fpl_url = "https://fantasy.premierleague.com/api/bootstrap-static/"

# Request data from the FPL API
response = requests.get(fpl_url)
fpl_data = response.json()

# Build a DataFrame from FPL API data
fpl_elements_df = pd.DataFrame(fpl_data['elements'])

# Select the required columns
fpl_elements_df = fpl_elements_df[['team', 'id', 'first_name', 'second_name', 'web_name', 'element_type',
                                 'cost_change_start', 'now_cost', 'selected_by_percent', 'transfers_in',
                                 'transfers_out', 'total_points', 'bonus', 'minutes', 'goals_scored',
                                 'assists', 'clean_sheets', 'status', 'form']]

# Map Element type to actual positions
fpl_elements_df['element_type'] = fpl_elements_df['element_type'].map({4: 'Forward', 3: 'Midfielder', 2: 'Defender', 1: 'Goalkeeper'})

# Map team names
fpl_elements_df['team'] = fpl_elements_df['team'].map({1: 'Arsenal', 2: 'Aston Villa', 3: 'Bournemouth', 4: 'Brentford',
                                                     5: 'Brighton', 6: 'Chelsea', 7: 'Crystal Palace', 8: 'Everton',
                                                     9: 'Fulham', 10: 'Leicester City', 11: 'Leeds United', 12: 'Liverpool',
                                                     13: 'Manchester City', 14: 'Manchester Utd', 15: 'Newcastle Utd',
                                                     16: 'Nottingham Forest', 17: 'Southampton', 18: 'Tottenham',
                                                     19: 'West Ham', 20: 'Wolves'})

# Convert values to appropriate data types
fpl_elements_df['selected_by_percent'] = fpl_elements_df['selected_by_percent'].astype(float)
fpl_elements_df['cost_change_start'] = fpl_elements_df['cost_change_start'] / 10
fpl_elements_df['now_cost'] = fpl_elements_df['now_cost'] / 10

# Rename columns for clarity
fpl_elements_df.columns = ['Team', 'Player ID', 'First Name', 'Second Name', 'Web Name', 'Position', 'Start Price',
                           'Current Price', 'Selected By', 'Transfers In', 'Transfers Out', 'Total Points', 'Bonus',
                           'Minutes', 'Goals Scored', 'Assists', 'Clean Sheets', 'Status', 'Form']

# Save the FPL data to an Excel file
fpl_elements_df.to_excel("FPL_Data.xlsx", index=False)

# URL for the Understat data CSV
understat_url = "https://github.com/vaastav/Fantasy-Premier-League/blob/master/data/2022-23/id_dict.csv?raw=true"

# Read the Understat data from the CSV
df_understat = pd.read_csv(understat_url)

# Clean the column names (remove spaces)
df_understat.columns = df_understat.columns.str.replace(' ', '')

# Merge FPL and Understat data using Player ID and FPL_ID columns
df_fpl_understat = pd.merge(fpl_elements_df, df_understat, left_on="Player ID", right_on="FPL_ID")

# Select only the required columns and convert Understat_ID to int
df_fpl_understat = df_fpl_understat[['Team', 'Player ID', 'First Name', 'Second Name', 'Web Name', 'Position',
                                   'Start Price', 'Current Price', 'Selected By', 'Transfers In', 'Transfers Out',
                                   'Form', 'Total Points', 'Bonus', 'Minutes', 'Goals Scored', 'Assists',
                                   'Clean Sheets', 'Status', 'Understat_ID']]
df_fpl_understat['Understat_ID'] = df_fpl_understat['Understat_ID'].astype(int)

# Save the merged data to an Excel file
df_fpl_understat.to_excel("Merged_Data.xlsx", index=False)

# Assuming you have df_fpl_understat as your merged DataFrame
data_html = df_fpl_understat.to_html(classes='table table-bordered table-striped', index=False)

# Define the route to display the data
@app.route('/')
def display_data():
    return render_template_string(open("index.html").read(), table=data_html)

if __name__ == '__main__':
    app.run(debug=True)