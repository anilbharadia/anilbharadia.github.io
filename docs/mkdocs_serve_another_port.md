# mkdocs serve use another different port

```shell
$ mkdocs serve
INFO     -  Building documentation...
INFO     -  Cleaning site directory
INFO     -  Documentation built in 0.62 seconds
OSError: [Errno 48] Address already in use
```

```shell
$ mkdocs serve -a localhost:9000
```

worked!