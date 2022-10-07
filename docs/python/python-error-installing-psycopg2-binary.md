# Python - Error installing psycopg2-binary on Mac M1

## Problem

Getting following error while installing psycopg2 library on MacOS M1.

```
[pipenv.exceptions.InstallError]:       In file included from psycopg/win32_support.c:28:
[pipenv.exceptions.InstallError]:       In file included from ./psycopg/psycopg.h:38:
[pipenv.exceptions.InstallError]:       ./psycopg/config.h:82:13: warning: unused function 'Dprintf' [-Wunused-function]
[pipenv.exceptions.InstallError]:       static void Dprintf(const char *fmt, ...) {}
[pipenv.exceptions.InstallError]:                   ^
[pipenv.exceptions.InstallError]:       1 warning generated.
[pipenv.exceptions.InstallError]:       clang -Wno-unused-result -Wsign-compare -Wunreachable-code -DNDEBUG -g -fwrapv -O3 -Wall -I/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include ... -lpq -lssl -lcrypto -o build/lib.macosx-12.6-arm64-cpython-38/psycopg2/_psycopg.cpython-38-darwin.so
[pipenv.exceptions.InstallError]:       ld: library not found for -lssl
[pipenv.exceptions.InstallError]:       clang: error: linker command failed with exit code 1 (use -v to see invocation)
[pipenv.exceptions.InstallError]:       error: command '/usr/bin/clang' failed with exit code 1
[pipenv.exceptions.InstallError]:       [end of output]
[pipenv.exceptions.InstallError]:   
[pipenv.exceptions.InstallError]:   note: This error originates from a subprocess, and is likely not a problem with pip.
[pipenv.exceptions.InstallError]: error: legacy-install-failure
[pipenv.exceptions.InstallError]: 
[pipenv.exceptions.InstallError]: × Encountered error while trying to install package.
[pipenv.exceptions.InstallError]: ╰─> psycopg2-binary
[pipenv.exceptions.InstallError]: 
[pipenv.exceptions.InstallError]: note: This is an issue with the package mentioned above, not pip.
[pipenv.exceptions.InstallError]: hint: See above for output from the failure.
```

## Cause

There is no wheel for this library for the given CPU architecture. 
So it tries to build the wheel in the local instead of downloading it. 
The error is in the build process.

## Solution:
Run this before installing the library.
```
brew install postgresql
export CPPFLAGS="-I/opt/homebrew/opt/openssl@1.1/include"
export LDFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib -L${HOME}/.pyenv/versions/3.8.13/lib"
```

Ref: [https://github.com/psycopg/psycopg2/issues/1286](https://github.com/psycopg/psycopg2/issues/1286)