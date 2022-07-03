
## Change Git user for a repository

```sh
git config user.name "anilbhradia"
git config user.email "anil.bharadia@gmail.com"
```

## Use Github token

Open `nano .git/config`

Replace the following line
```
[remote "origin"]
        url = https://github.com/anilbharadia/anilbharadia.github.io.git
```
With
```
[remote "origin"]
        url = https://xxx@github.com/anilbharadia/anilbharadia.github.io.git
```
Where `xxx` is the token

## Use atom as a git editor

```shell
git config --global core.editor "atom --wait"
```

## git change the user of a commit

Ref: https://stackoverflow.com/a/3042512


`git rebase -i HEAD~1`

This opened editor (atom) with content
```txt
pick 049c296 update instructions for local env setup in README.md

# ...
```

Changed `pick` to `edit`, saved, and closed atom.

`git commit --amend --author="Author Name <email@address.com>"`

It opened editor again to set the commit message. Updated message, saved, and closed atom.

`git rebase --continue`

`git push -f`

done.