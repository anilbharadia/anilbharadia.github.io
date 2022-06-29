
## Problem:

After installing homebrew, I am geting this error:
Getting error: `zsh: command not found: brew`

## Solution:

Run
```sh
echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/$USER/.zshrc
source ~/.zshrc
```

Notes: brew was intalled in `/opt/homebrew/` location which was not added to the path automatically.

Reference: https://stackoverflow.com/q/36657321
