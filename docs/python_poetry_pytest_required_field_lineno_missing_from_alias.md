# Python Poetry Pytest TypeError: required field "lineno" missing from alias


```shell
poetry run pytest
```

returns

```
Traceback (most recent call last):
  File "~/.../venv/bin/pytest", line 8, in <module>
    sys.exit(main())
  File "~/.../venv/lib/python3.10/site-packages/_pytest/config/__init__.py", line 71, in main
    config = _prepareconfig(args, plugins)
  File "~/.../venv/lib/python3.10/site-packages/_pytest/config/__init__.py", line 215, in _prepareconfig
    return pluginmanager.hook.pytest_cmdline_parse(
  File "~/.../venv/lib/python3.10/site-packages/pluggy/hooks.py", line 286, in __call__
    return self._hookexec(self, self.get_hookimpls(), kwargs)
  File "~/.../venv/lib/python3.10/site-packages/pluggy/manager.py", line 93, in _hookexec
    return self._inner_hookexec(hook, methods, kwargs)
  File "~/.../venv/lib/python3.10/site-packages/pluggy/manager.py", line 84, in <lambda>
    self._inner_hookexec = lambda hook, methods, kwargs: hook.multicall(
  File "~/.../venv/lib/python3.10/site-packages/pluggy/callers.py", line 203, in _multicall
    gen.send(outcome)
  File "~/.../venv/lib/python3.10/site-packages/_pytest/helpconfig.py", line 89, in pytest_cmdline_parse
    config = outcome.get_result()
  File "~/.../venv/lib/python3.10/site-packages/pluggy/callers.py", line 80, in get_result
    raise ex[1].with_traceback(ex[2])
  File "~/.../venv/lib/python3.10/site-packages/pluggy/callers.py", line 187, in _multicall
    res = hook_impl.function(*args)
  File "~/.../venv/lib/python3.10/site-packages/_pytest/config/__init__.py", line 733, in pytest_cmdline_parse
    self.parse(args)
  File "~/.../venv/lib/python3.10/site-packages/_pytest/config/__init__.py", line 940, in parse
    self._preparse(args, addopts=addopts)
  File "~/.../venv/lib/python3.10/site-packages/_pytest/config/__init__.py", line 887, in _preparse
    self.pluginmanager.load_setuptools_entrypoints("pytest11")
  File "~/.../venv/lib/python3.10/site-packages/pluggy/manager.py", line 299, in load_setuptools_entrypoints
    plugin = ep.load()
  File "~/.pyenv/versions/3.10.5/lib/python3.10/importlib/metadata/__init__.py", line 171, in load
    module = import_module(match.group('module'))
  File "~/.pyenv/versions/3.10.5/lib/python3.10/importlib/__init__.py", line 126, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
  File "<frozen importlib._bootstrap>", line 1050, in _gcd_import
  File "<frozen importlib._bootstrap>", line 1027, in _find_and_load
  File "<frozen importlib._bootstrap>", line 1006, in _find_and_load_unlocked
  File "<frozen importlib._bootstrap>", line 688, in _load_unlocked
  File "~/.../venv/lib/python3.10/site-packages/_pytest/assertion/rewrite.py", line 133, in exec_module
    source_stat, co = _rewrite_test(fn, self.config)
  File "~/.../venv/lib/python3.10/site-packages/_pytest/assertion/rewrite.py", line 284, in _rewrite_test
    co = compile(tree, fn, "exec", dont_inherit=True)
TypeError: required field "lineno" missing from alias
```


`pytest -V` or `pytest --version` also reports the same error.

[This post](https://stackoverflow.com/a/69569206) claims it is fixed in pytest verion 6.2.5

set `pytest = "==7.1.2"`

```
poetry update
```

`pytest --version` -> `pytest 7.1.2`


run again
```shell
poetry run pytest
```

It worked.