# Python iterate the dictionary

``` .py
d = {1: 'A', 2: 'B', 3: 'C'}
print(d)
names = [name for uid, name in d.items() if uid > 1]
print(names)
```

output:
``` .sh
{1: 'A', 2: 'B', 3: 'C'}
['B', 'C']
```