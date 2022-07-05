
course: https://course.fast.ai/

## Lesson 1

- https://course.fast.ai/videos/?lesson=1
    
- https://www.youtube.com/watch?v=_QUEXsHfsA0


Source: https://github.com/fastai/fastbook

### Error installing fastbook

```
pip install fastbook
```

returns

```
...
Collecting MarkupSafe>=2.0
  Using cached MarkupSafe-2.1.1-cp310-cp310-macosx_10_9_universal2.whl (17 kB)
Using legacy 'setup.py install' for sentencepiece, since package 'wheel' is not installed.
Building wheels for collected packages: tokenizers
  Building wheel for tokenizers (pyproject.toml) ... error
  error: subprocess-exited-with-error
  
  × Building wheel for tokenizers (pyproject.toml) did not run successfully.
  │ exit code: 1
  ╰─> [51 lines of output]
      running bdist_wheel
      running build
      running build_py
      creating build
      creating build/lib.macosx-12.1-arm64-cpython-310
      creating build/lib.macosx-12.1-arm64-cpython-310/tokenizers
      copying py_src/tokenizers/__init__.py -> build/lib.macosx-12.1-arm64-cpython-310/tokenizers
      ...
      copying py_src/tokenizers/tools/visualizer-styles.css -> build/lib.macosx-12.1-arm64-cpython-310/tokenizers/tools
      running build_ext
      running build_rust
      error: can't find Rust compiler
      
      If you are using an outdated pip version, it is possible a prebuilt wheel is available for this package but pip is not able to install from it. Installing from the wheel would avoid the need for a Rust compiler.
      
      To update pip, run:
      
          pip install --upgrade pip
      
      and then retry package installation.
      
      If you did intend to build this package from source, try installing a Rust compiler from your system package manager and ensure it is on the PATH during installation. Alternatively, rustup (available at https://rustup.rs) is the recommended way to download and update the Rust compiler toolchain.
      [end of output]
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
  ERROR: Failed building wheel for tokenizers
Failed to build tokenizers
ERROR: Could not build wheels for tokenizers, which is required to install pyproject.toml-based projects
WARNING: You are using pip version 22.0.4; however, version 22.1.2 is available.
You should consider upgrading via the '/Users/anil/github/fastai/fastbook/clean/venv/bin/python -m pip install --upgrade pip' command.
```

It seems I need to install rust compiler

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

verify the installation via `rustc -h`. I needed to close and reopen terminal again.

install again

```
pip install fastbook
```