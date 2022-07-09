# Ubuntu - Create a new systemd service

# How to create a new systemd service on ubuntu

create a file `/etc/systemd/system/my-app.service` with the following content

```service
[Unit]
Description=My Service 
After=network.target


[Service]
Environment="HOME=/root"
EnvironmentFile=/home/anil/prod.env
ExecStart=/home/anil/jdk-15.0.1/bin/java -jar /home/anil/my-app.jar
Type=simple
Restart=always

[Install]
WantedBy=default.target
```

Check if the service is created:
```shell
$ systemctl status my-app.service
● my-app.service - My Service
     Loaded: loaded (/etc/systemd/system/my-app.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
```

Create aliases to manage service
```shell
echo "alias myapp-status='systemctl status my-app.service'" >> ~/.bashrc
echo "alias myapp-start='systemctl start my-app.service'" >> ~/.bashrc
echo "alias myapp-restart='systemctl restart my-app.service'" >> ~/.bashrc
echo "alias myapp-stop='systemctl stop my-app.service'" >> ~/.bashrc
echo "alias myapp-logs='journalctl -u my-app.service -e -f'" >> ~/.bashrc
```

ref: [manpage](https://manpages.ubuntu.com/manpages/focal/man5/systemd.service.5.html)
