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

