# Exasol


## Find users with a given role

```sql
select * from exa_dba_role_privs where granted_role = 'MY_ROLE';
```

