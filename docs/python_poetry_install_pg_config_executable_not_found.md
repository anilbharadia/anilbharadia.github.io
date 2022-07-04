Error `pg_config executable not found` while installing psycopg2 via poetry.

## Problem

```shell
poetry install
``` 

returned following error.

```
Installing dependencies from lock file

Package operations: 1 install, 0 updates, 0 removals

  • Installing psycopg2-binary (2.9.3): Failed

  EnvCommandError

  Command ['/Users/anil/.../venv/bin/pip', 'install', '--no-deps', 'file:///Users/anil/Library/Caches/pypoetry/artifacts/.../psycopg2-binary-2.9.3.tar.gz'] errored with the following return code 1, and output: 
  Processing /Users/anil/Library/Caches/pypoetry/artifacts/.../psycopg2-binary-2.9.3.tar.gz
    Preparing metadata (setup.py): started
    Preparing metadata (setup.py): finished with status 'error'
    ERROR: Command errored out with exit status 1:
     command: /Users/anil/.../venv/bin/python -c 'import io, os, sys, setuptools, tokenize; sys.argv[0] = '"'"'/private/var/folders/47/.../T/pip-req-build-lvsj6n0r/setup.py'"'"'; __file__='"'"'/private/var/folders/47/.../T/pip-req-build-lvsj6n0r/setup.py'"'"';f = getattr(tokenize, '"'"'open'"'"', open)(__file__) if os.path.exists(__file__) else io.StringIO('"'"'from setuptools import setup; setup()'"'"');code = f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base /private/var/folders/47/.../T/pip-pip-egg-info-lgklgcy5
         cwd: /private/var/folders/47/.../T/pip-req-build-lvsj6n0r/
    Complete output (20 lines):
    running egg_info
    creating /private/var/folders/47/.../T/pip-pip-egg-info-lgklgcy5/psycopg2_binary.egg-info
    writing manifest file '/private/var/folders/47/.../T/pip-pip-egg-info-lgklgcy5/psycopg2_binary.egg-info/SOURCES.txt'
    
    Error: pg_config executable not found.
    
    pg_config is required to build psycopg2 from source.  Please add the directory
    containing pg_config to the $PATH or specify the full executable path with the
    option:
    
        python setup.py build_ext --pg-config /path/to/pg_config build ...
    
    or with the pg_config option in 'setup.cfg'.
    
    If you prefer to avoid building psycopg2 from source, please install the PyPI
    'psycopg2-binary' package instead.
    
    For further information please check the 'doc/src/install.rst' file (also at
    <https://www.psycopg.org/docs/install.html>).
    
    ----------------------------------------
  WARNING: Discarding file:///Users/anil/Library/Caches/pypoetry/artifacts/ba/42/10/.../psycopg2-binary-2.9.3.tar.gz. Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.
  ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.
  WARNING: You are using pip version 21.3.1; however, version 22.1.2 is available.
  You should consider upgrading via the '/Users/anil/.../venv/bin/python -m pip install --upgrade pip' command.
  

  at ~/.poetry/lib/poetry/utils/env.py:1195 in _run
      1191│                 output = subprocess.check_output(
      1192│                     cmd, stderr=subprocess.STDOUT, **kwargs
      1193│                 )
      1194│         except CalledProcessError as e:
    → 1195│             raise EnvCommandError(e, input=input_)
      1196│ 
      1197│         return decode(output)
      1198│ 
      1199│     def execute(self, bin, *args, **kwargs):
```

## Solution


Check if pg_config is installed or not.

`which pg_config` -> `pg_config not found`

Ref: https://stackoverflow.com/a/24645416

```shell
brew install postgresql
```

`which pg_config` -> `/opt/homebrew/bin/pg_config`

`poetry install` -> success