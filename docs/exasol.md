# Exasol


## Find users with a given role

```sql
select * from exa_dba_role_privs where granted_role = 'MY_ROLE';
```

## Find the schema owner

check the owner of the schema unsing:

```sql
select * from exa_schemas where schema_name = 'MY_SCHEMA';
```

## Find the table owner

```sql
select * from EXA_USER_TABLES where table_schema = 'MY_SCHEMA' and table_name = 'MY_TABLE';
```

## Exasol any true

[ref](https://docs.exasol.com/db/latest/sql_references/functions/alphabeticallistfunctions/any.htm)

```sql
with
    base(dept, name, is_tech) as (
        values
            ('D1', 'P1', true), ('D1', 'P2', false),
            ('D2', 'P3', false), ('D2', 'P4', false),
            ('D3', 'P5', null),
            ('D4', 'P6', false), ('D4', 'P7', null)
    )
select dept, any(is_tech) as is_any_tech
from base
group by dept
order by dept;
```

returns

| DEPT | IS_ANY_TECH |
| ---- | ----------- |
| D1   | true        |
| D2   | false       |
| D3   | `null`      |
| D4   | false       |


## View all system tables 

```sql
select * from exa_syscat;
```