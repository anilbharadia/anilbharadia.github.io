# Exasol python set script example

``` .sql
CREATE OR REPLACE PYTHON3 SET SCRIPT my_schema.make_double (
    val INT
    )
    EMITS (
        val INT
        )
    AS

def run(ctx):
    while True:
        val = ctx.val
        ctx.emit(val * 2)
        if not ctx.next():
            break

/

with d as (select level as val
           from dual
           connect by level <= 10)
select my_schema.make_double(d.val) from d;
```


returns 
```
VAL
2
4
6
8
10
12
14
16
18
20
```