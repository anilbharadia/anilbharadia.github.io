# FastAI

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
You should consider upgrading via the '/Users/anil/.../venv/bin/python -m pip install --upgrade pip' command.
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

returns

```
...
Using legacy 'setup.py install' for sentencepiece, since package 'wheel' is not installed.
Installing collected packages: sentencepiece, murmurhash, cymem, xxhash, typing-extensions, typer, tqdm, threadpoolctl, spacy-loggers, spacy-legacy, smart-open, regex, preshed, pillow, numpy, multidict, langcodes, kiwisolver, joblib, graphviz, fsspec, frozenlist, fonttools, filelock, fastprogress, dill, cycler, catalogue, async-timeout, yarl, torch, srsly, scipy, responses, pydantic, pyarrow, pathy, pandas, multiprocess, matplotlib, huggingface-hub, fastcore, blis, aiosignal, transformers, torchvision, thinc, scikit-learn, fastdownload, aiohttp, spacy, fastai, datasets, fastbook
  Running setup.py install for sentencepiece ... error
  error: subprocess-exited-with-error
  
  × Running setup.py install for sentencepiece did not run successfully.
  │ exit code: 1
  ╰─> [43 lines of output]
      ~/.pyenv/versions/3.10.5/lib/python3.10/site-packages/setuptools/dist.py:717: UserWarning: Usage of dash-separated 'description-file' will not be supported in future versions. Please use the underscore name 'description_file' instead
        warnings.warn(
      running install
      running build
      running build_py
      creating build
      creating build/lib.macosx-12.1-arm64-3.10
      creating build/lib.macosx-12.1-arm64-3.10/sentencepiece
      copying src/sentencepiece/__init__.py -> build/lib.macosx-12.1-arm64-3.10/sentencepiece
      copying src/sentencepiece/sentencepiece_model_pb2.py -> build/lib.macosx-12.1-arm64-3.10/sentencepiece
      copying src/sentencepiece/sentencepiece_pb2.py -> build/lib.macosx-12.1-arm64-3.10/sentencepiece
      running build_ext
      Package sentencepiece was not found in the pkg-config search path.
      Perhaps you should add the directory containing `sentencepiece.pc'
      to the PKG_CONFIG_PATH environment variable
      No package 'sentencepiece' found
      Cloning into 'sentencepiece'...
      Note: switching to 'd8711f55d9b2cb9c77a00adcc18108482b29b675'.
      
      You are in 'detached HEAD' state. You can look around, make experimental
      changes and commit them, and you can discard any commits you make in this
      state without impacting any branches by switching back to a branch.
      
      If you want to create a new branch to retain commits you create, you may
      do so (now or later) by using -c with the switch command. Example:
      
        git switch -c <new-branch-name>
      
      Or undo this operation with:
      
        git switch -
      
      Turn off this advice by setting config variable advice.detachedHead to false
      
      ./build_bundled.sh: line 15: cmake: command not found
      ./build_bundled.sh: line 16: nproc: command not found
      make: *** No targets specified and no makefile found.  Stop.
      make: *** No rule to make target `install'.  Stop.
      Package sentencepiece was not found in the pkg-config search path.
      Perhaps you should add the directory containing `sentencepiece.pc'
      to the PKG_CONFIG_PATH environment variable
      No package 'sentencepiece' found
      Failed to find sentencepiece pkg-config
      [end of output]
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
error: legacy-install-failure

× Encountered error while trying to install package.
╰─> sentencepiece

note: This is an issue with the package mentioned above, not pip.
hint: See above for output from the failure.
```

check if cmake is installed

`cmake -h` -> `zsh: command not found: cmake`

Install cmake `brew install cmake`

Try again `pip install fastbook`

It failed with following log

```
...
                                              ^
      In file included from src/sentencepiece/sentencepiece_wrap.cxx:2808:
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:642:26: error: no template named 'numeric_limits'
          bool _FloatBigger = (numeric_limits<_FloatT>::digits > numeric_limits<_IntT>::digits),
                               ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:642:60: error: no template named 'numeric_limits'
          bool _FloatBigger = (numeric_limits<_FloatT>::digits > numeric_limits<_IntT>::digits),
                                                                 ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:643:18: error: no template named 'numeric_limits'
          int _Bits = (numeric_limits<_IntT>::digits - numeric_limits<_FloatT>::digits)>
                       ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:643:50: error: no template named 'numeric_limits'
          int _Bits = (numeric_limits<_IntT>::digits - numeric_limits<_FloatT>::digits)>
                                                       ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:648:17: error: no template named 'numeric_limits'
        static_assert(numeric_limits<_FloatT>::radix == 2, "FloatT has incorrect radix");
                      ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:651:25: error: no template named 'numeric_limits'
        return _FloatBigger ? numeric_limits<_IntT>::max() :  (numeric_limits<_IntT>::max() >> _Bits << _Bits);
                              ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:651:58: error: no template named 'numeric_limits'
        return _FloatBigger ? numeric_limits<_IntT>::max() :  (numeric_limits<_IntT>::max() >> _Bits << _Bits);
                                                               ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:645:25: error: no return statement in constexpr function
      _LIBCPP_CONSTEXPR _IntT __max_representable_int_for_float() _NOEXCEPT {
                              ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:661:16: error: no template named 'numeric_limits'
        using _Lim = numeric_limits<_IntT>;
                     ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:664:12: error: use of undeclared identifier '_Lim'
          return _Lim::max();
                 ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:665:21: error: use of undeclared identifier '_Lim'
        } else if (__r <= _Lim::lowest()) {
                          ^
      /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1/cmath:666:12: error: use of undeclared identifier '_Lim'
          return _Lim::min();
                 ^
      197 warnings and 12 errors generated.
      error: command '/usr/bin/clang' failed with exit code 1
      [end of output]
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
error: legacy-install-failure

× Encountered error while trying to install package.
╰─> sentencepiece

note: This is an issue with the package mentioned above, not pip.
hint: See above for output from the failure.
```

try to install sentencepiece via pip directly `pip install sentencepiece`

Still getting the same error as above.

Looks like there is no wheel for python 3.10 for mac os and it tries to build it in my local machine. There is a wheel for 3.9 so let's try that.

```shell
pyenv install 3.9.13
pyenv local 3.9.13
rm -rf venv
python -m venv venv
source ./venv/bin/activate
```


try again: `pip install fastbook`


Success!!

--------

```python
import fastbook
``` 
-> error `ModuleNotFoundError: No module named '_lzma'`


Let's try the solution as per this post: https://stackoverflow.com/a/69517932

```shell
brew install xz
pyenv uninstall 3.9.13
pyenv install 3.9.13
rm -rf venv
python -m venv venv
source ./venv/bin/activate
pip install fastbook
```


try again

```python
import fastbook
``` 
->
```
...
except ModuleNotFoundError: warn("Missing `ipywidgets` - please install it")
```

let's try `pip install ipywidgets`

try again

```python
import fastbook
``` 

This time got warning only
```
~/.../venv/lib/python3.9/site-packages/torchvision/io/image.py:13: UserWarning: Failed to load image Python extension: dlopen(~/.../venv/lib/python3.9/site-packages/torchvision/image.so, 0x0006): Symbol not found: __ZN3c106detail19maybe_wrap_dim_slowExxb
  Referenced from: ~/.../venv/lib/python3.9/site-packages/torchvision/image.so
  Expected in: ~/.../venv/lib/python3.9/site-packages/torch/lib/libc10.dylib
  warn(f"Failed to load image Python extension: {e}")
```

The notebook from git repo is working now!!