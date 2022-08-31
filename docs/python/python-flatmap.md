# Python flatmap

## Problem

Get the sales numbers as a list from all the articles

``` py
articles = [{"name": "A1", "weekly_sales": {"202201": 10, "202202": 20}}, {"name":"A2", "weekly_sales":{"202202": 30, "202203": 40}}]
```

## Solution 
``` py
[sales for a in articles for sales in a["weekly_sales"].values()]
```

## Syntax

``` py
[VALUE_FROM_INNER_LOOP OUTER_LOOP INNER_LOOP]
```