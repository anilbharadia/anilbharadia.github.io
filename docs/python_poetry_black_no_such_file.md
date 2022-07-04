

## Problem

```shell
poetry run black
```

Returns

```shell
  FileNotFoundError

  [Errno 2] No such file or directory: b'/Users/abharadia/.local/bin/black'

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


1. make sure poetry installed properly.

run `poetry install` --> it failed with

```shell
  • Installing typed-ast (1.4.3)

  EnvCommandError
...
        199 warnings and 1 error generated.
        error: command '/usr/bin/clang' failed with exit code 1
        [end of output]
    
    note: This error originates from a subprocess, and is likely not a problem with pip.
  error: legacy-install-failure
  

  × Encountered error while trying to install package.
  ╰─> typed-ast

  note: This is an issue with the package mentioned above, not pip.
  hint: See above for output from the failure.

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

This error is while installing `Installing typed-ast (1.4.3)`

This package was a dependency of mypy (0.761). 

I changed the mypy version to 0.961 and it does not have this dependency.
