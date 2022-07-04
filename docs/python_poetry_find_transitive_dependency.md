
Search in the poetry.lock file

It has this structure:

```toml
[[package]]
name = "mypy"
version = "0.761"
description = "Optional static typing for Python"
category = "dev"
optional = false
python-versions = ">=3.5"

[package.dependencies]
mypy-extensions = ">=0.4.3,<0.5.0"
typed-ast = ">=1.4.0,<1.5.0"
typing-extensions = ">=3.7.4"
```

