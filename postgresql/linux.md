# Linux Installation of postgres

## Install postgres:

```sh
yay -S postgres
```

## Initialize postgres

```sh
sudo -u postgres initdb -D /var/lib/postgres/data
```

```sh
sudo systemctl start postgresql
sudo systemctl status postgresql
sudo systemctl enable postgresql
```

## Check if the folder has the appropriate options

```sh
sudo chown -R postgres:postgres /var/lib/postgres/data
sudo chmod 700 /var/lib/postgres/data
```
