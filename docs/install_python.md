
## Install pyenv
`curl https://pyenv.run | bash`


## Verify pyenv is installed
`pyenv versions` --> `zsh: command not found: pyenv`
This erorr is because I need to configure the shell env


## Set shell env 
ref: https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv

```sh
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```
`source ~/.zshrc`

`pyenv versions` --> `* system (set by /Users/abharadia/.pyenv/version)`

## install python 

`pyenv install 3.10.5`

`pyenv versions` --> 
```sh
* system (set by /Users/abharadia/.pyenv/version)
  3.10.5
```

## set python version
`python --version` --> `Python 2.7.18` My python command is still set to use older version

`pyenv global 3.10.5`

`python --version` --> `Python 2.7.18`

`pyenv versions` --> 
```sh
  system
* 3.10.5 (set by /Users/abharadia/.pyenv/version)
``` 
So the * moved to the 3.10.5 but it is not used by python --version yet

In the file `~/.zshrc` change line `eval "$(pyenv init -)"` to `eval "$(pyenv init --path)"` Ref: https://stackoverflow.com/a/68228627

```sh
source ~/.zshrc    
python --version  
```
--> `Python 3.10.5`


## Install poetry

```sh
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
source $HOME/.poetry/env
poetry --version
```
--> `Poetry version 1.1.13`