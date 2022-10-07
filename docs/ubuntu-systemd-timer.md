# Ubuntu - Create a new systemd timer

## create timer file

create a file `/etc/systemd/system/my-app.timer` with the following content

```timer
[Unit]
Description=Restart MyApp every hour

[Timer]
OnCalendar=hourly

[Install]
WantedBy=timers.target
```

## enable the timer
```shell
sudo systemctl daemon-reload
sudo systemctl enable --now my-app.timer
```

Check if the service is created:
```shell
systemctl status my-app.timer
```



ref: 
- [https://wiki.archlinux.org/title/Systemd/Timers](https://wiki.archlinux.org/title/Systemd/Timers)
- https://linuxhint.com/cron_systemd_timer/
-
