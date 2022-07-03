# GPG Key

check if gpg is installed 

`gpg -h` -> `zsh: command not found: gpg`

not installed.

## Install GPG

```shell
brew install gnupg
```

## Import private key

If you have it generared it in another machine.

```shell
gpg --import ~/Downloads/Secret.asc
```

## Find the key id

```shell
gpg --list-keys
```

This prints following
```shell
/Users/abharadia/.gnupg/pubring.kbx
-----------------------------------
pub   rsa4096 2022-06-18 [SC] [expires: 2026-06-18]
      ACACACACACACAC1111111111QQQQZZZZABCDEFGH
uid           [ unknown] username <user.name@gmail.com>
sub   rsa4096 2022-06-18 [E] [expires: 2026-06-18]
```

Here the last 8 characters `ABCDEFGH` is the key id

## Create a secring file

This can be used to sign the artifacts before publishing to maven repo.

```shell
gpg --keyring secring.gpg --export-secret-key ABCDEFGH > secring.gpg
```

returns `gpg: keyblock resource '/Users/abharadia/.gnupg/secring.gpg': No such file or directory`

```shell
gpg --export-secret-key ABCDEFGH > secring.gpg
```

This worked


# TODO
How to generate GPG key to sign maven packages before publishing to maven central repo
