# Python read CSV

## Read row as a Dict

```python
import csv
with open("./data.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
```
