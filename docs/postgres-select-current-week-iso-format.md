# PostgreSQL select current week in iso format

``` .sql
select 
	to_char(current_date, 'iyyyiw')::int as current_week,
    to_char(current_date - interval '1 week', 'iyyyiw')::int as prev_week
;
```

https://www.db-fiddle.com/f/r9uhZeKzjzPb5mV9RnVUaQ/0