
# Ubuntu - Enable ssh from local network

How can I ssh into a ubuntu machine which is connected to the same wifi?


try
```shell
$ ssh anil@192.168.0.20
ssh: connect to host 192.168.0.20 port 22: Connection refused
```

Install openssh server on ubuntu.

```shell
sudo apt-get install openssh-server
```


try again:
```shell
$ ssh anil@192.168.0.20
anil@anil-notebook:~$ 
```

It worked!