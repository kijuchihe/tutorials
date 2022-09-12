# Services

## List Running Services on Linux (Ubuntu)

To get a list of the service on your system, you may run:

`service --status-all`

The output of `service --status-all` lists the state of services controlled by System V.

In the output, the `+` indicates the service is running, `-` indicates a stopped service.
You can see this by running `service SERVICENAME status` for a + and - service.

Some services are managed by Upstart. You can check the status of all Upstart services with `sudo initctl list`. Any
service managed by Upstart will also show in the list provided by `service --status-all` but will be marked with a `?`.
ref: <https://askubuntu.com/questions/407075/how-to-read-service-status-all-results>

## Systemd service management

### Listing services

- `systemctl` To list running services
- `systemctl` --failed To list failed services

### Managing Targets (Similar to Runlevels in SysV)

- `systemctl get-default` To find the default target for your system
- `systemctl set-default <target-name>` To set the default target for your system

### Managing services at runtime

- `systemctl start [service-name]` To start a service
- `systemctl stop [service-name]` To stop a service
- `systemctl restart [service-name]` To restart a service
- `systemctl reload [service-name]` To request service to reload its configuration
- `systemctl status [service-name]` To show current status of a service

### Managing autostart of services

- `systemctl is-enabled [service-name]` To show whether a service is enabled on system boot
- `systemctl is-active [service-name]` To show whether a service is currently active(running)
- `systemctl enable [service-name]` To enable a service on system boot
- `systemctl disable [service-name]` To disable a service on system boot

### Masking services

- `systemctl mask [service-name]` To mask a service (Makes it hard to start a service by mistake)
- `systemctl unmask [service-name]` To unmask a service

### Restarting systemd

- `systemctl daemon-reload`

## Diagnosing a problem with a service

On systems using systemd, such as Fedora => 15, Ubuntu (Server and Desktop) >= 15.04, and RHEL/CentOS >= 7:
`systemctl status [servicename]`
...where [servicename] is the service in question; for example,

```sh
systemctl status sshd.
```

> This will show basic status information and any recent errors logged.
You can see further errors with `journalctl`. For example,

- `journalctl -xe` will load the last 1000 logged into a pager (like less), jumping to the end.
You can also use journalctl -f, which will follow log messages as they come in.

To see logs for a particular service, use the -t flag, like this:

```sh
journalctl -f -t sshd
```

Other handy options include:

- `-p` for priority (-p warnings to see only warnings and above),
- -b for "since last boot"
- -S for "since"

> Putting that together, we might the following
> to see all items logged as errors since yesterday

```sh
journalctl -p err -S yesterday
```

If journalctl is not available, or if you are following application error logs which do not use the system journal, the
`tail` command can be used to show the last few lines of a file.

A useful flag for tail is -f (for "follow"), which causes tail continue showing data as it gets appended to the file. To see messages from most services on the system:

```sh
tail -f /var/log/messages
```

Or, if the service is privileged, and may log sensitive data:

```sh
tail -f /var/log/secure
```

Some services have their own log files, a good example is `auditd`, the **_linux auditing daemon_**, which has its logs
stored in /var/log/audit/. If you do not see output from your service in /var/log/messages try looking for service
specific logs in /var/log/

## Starting and Stopping Services

### On systems that use the System-V style init scripts, such as RHEL/CentOS 6

```sh
service <service> start
service <service> stop
```

### On systems using systemd, such as Ubuntu (Server and Desktop) >= 15.04, and RHEL/CentOS >= 7

```sh
systemctl <service> dnsmasq
systemctl <service> dnsmasq
```

## Getting the status of a service

### On systems that use the System-V style init scripts

```sh
service <service> status
```

### On systems using systemd, such as Ubuntu (Server and Desktop) >= 15.04, and RHEL/CentOS >= 7.0

```sh
systemctl status <service>
```
