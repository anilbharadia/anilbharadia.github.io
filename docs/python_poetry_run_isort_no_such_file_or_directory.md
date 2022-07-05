# Python - Poetry - isort - No such file or directory ~/.local/bin/isort


## Problem: No such file or directory ~/.local/bin/isort

```shell
poetry run isort
```

returns

```
  FileNotFoundError

  [Errno 2] No such file or directory: b'/Users/anil/.local/bin/isort'

  at ~/.pyenv/versions/3.10.5/lib/python3.10/os.py:607 in _execvpe
       603│         path_list = map(fsencode, path_list)
       604│     for dir in path_list:
       605│         fullname = path.join(dir, file)
       606│         try:
    →  607│             exec_func(fullname, *argrest)
       608│         except (FileNotFoundError, NotADirectoryError) as e:
       609│             last_exc = e
       610│         except OSError as e:
       611│             last_exc = e

```

## Solution

Check if all the dependencies are installed properly.

```shell
poetry install
```

returns

```
Installing dependencies from lock file

Package operations: 323 installs, 1 update, 0 removals

    • Installing numpy (1.21.1):
...
----------------------------------------
    ERROR: Failed building wheel for numpy
  Failed to build numpy
  ERROR: Could not build wheels for numpy, which is required to install pyproject.toml-based projects
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

try to install directly via pip

```shell
pip install numpy
```

and then try again

```shell
poetry install                                                                                                 
```

returns

```
Installing dependencies from lock file

No dependencies to install or update
```

Done



