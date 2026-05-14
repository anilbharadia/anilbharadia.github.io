import pandas as pd

# 1. Load the CSV file
# Replace 'your_data.csv' with the name of your actual file
file_name = '2026-YTD.txt'
df = pd.read_csv(file_name)

# 2. Clean column names
# Since your columns have leading/trailing spaces (e.g., '  Date      '),
# we strip them to make the column names easier to work with.
df.columns = df.columns.str.strip()

# Clean the DATA inside the column and then convert
# .str.strip() removes the " 07/01/26  " extra spaces
df['Date'] = pd.to_datetime(df['Date'].str.strip(), format='%d/%m/%y')

# 3. Convert the 'Date' column to datetime objects
# format='%d/%m/%y' matches the Day/Month/2-digit Year format
df['Date'] = pd.to_datetime(df['Date'], format='%d/%m/%y')

# 4. Convert the datetime objects back to strings in the 'YYYY.MM.DD' format
df['Date'] = df['Date'].dt.strftime('%Y.%m.%d')

# 5. Save the updated data back to a new CSV file
output_file = '2026-YTD.csv'
df.to_csv(output_file, index=False)

print(f"Successfully converted dates. Saved to {output_file}")