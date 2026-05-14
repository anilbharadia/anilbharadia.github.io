# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "pandas",
# ]
# ///
import pandas as pd
import io
import os

directory_path = os.path.expanduser('~/Downloads/NRO/')
print(f"looking into dir {directory_path}")

files = [f for f in os.listdir(directory_path) if f.lower().endswith('.txt')]
print(f"found {len(files)} files")

for file_name in files:
    full_input_path = os.path.join(directory_path, file_name)
    print(f"updating {file_name}")

    with open(full_input_path, 'r', encoding='utf-8', errors='ignore') as f:
        file_content = f.read()
    cleaned_content = file_content.replace('-NETBANK,', '-NETBANK ')

    # 1. Load the CSV file
    # Replace 'your_data.csv' with the name of your actual file
    df = pd.read_csv(io.StringIO(cleaned_content), skip_blank_lines=True)

    # 2. Clean column names
    # Since your columns have leading/trailing spaces (e.g., '  Date      '),
    # we strip them to make the column names easier to work with.
    df.columns = df.columns.str.strip()

    # Clean the DATA inside the column and then convert
    # .str.strip() removes the " 07/01/26  " extra spaces
    df['Date'] = pd.to_datetime(df['Date'].str.strip(), format='%d/%m/%y')
    # 4. Convert the datetime objects back to strings in the 'YYYY.MM.DD' format
    df['Date'] = df['Date'].dt.strftime('%Y.%m.%d')

    df['Value Dat'] = pd.to_datetime(df['Value Dat'].str.strip(), format='%d/%m/%y')
    # Convert the datetime objects back to strings in the 'YYYY.MM.DD' format
    df['Value Dat'] = df['Value Dat'].dt.strftime('%Y.%m.%d')

    # 5. Save the updated data back to a new CSV file
    output_path = os.path.join(directory_path, f"{file_name}.csv")
    df.to_csv(output_path, index=False)

    print(f"Successfully converted dates. Saved to {output_path}")