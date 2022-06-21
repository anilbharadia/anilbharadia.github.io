
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