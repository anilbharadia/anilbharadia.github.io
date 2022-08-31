
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

This opens editor (atom) with content like:
```txt
pick 012a345 update instructions for local env setup in README.md

# ...
```

Change `pick` to `edit`, save, and close the editor.

`git commit --amend --author="Author Name <email@address.com>"`

It will open the editor again to set the commit message. Update the message, save, and close atom.

`git rebase --continue`

`git push -f`

done.