# Presto

## Convert varchar to timestamp

``` sql
select from_iso8601_timestamp('2022-06-26T23:59:58.730Z')
```

## Difference between two timestamp

``` sql
select from_iso8601_timestamp('2022-06-26T23:59:58.730Z') - from_iso8601_timestamp('2022-06-26T22:59:58.730Z') as diff;
```

in days

``` sql
select date_diff('day',from_iso8601_timestamp('2022-06-21T02:59:58.730Z'), from_iso8601_timestamp('2022-06-26T23:59:58.730Z')) as diff;
```
