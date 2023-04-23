# Sending Emails

```sh
sudo apt install ssmtp
```

```sh
gedit /etc/ssmtp/ssmtp.conf
```

```conf
root=emailaddress@gmail.com
mailhub=smtp.gmail.com:587
; mailhub=smtp.gmail.com:465 incase of ssl
AuthUser=emailaddress@gmail.com
AuthPass=Password
UseSTARTTLS=yes
```

```sh
ssmtp emailaddress@gmail.com
```

WHen the script is run, it will open an interactive terminal where you can
structure your data

```sh
To: emailaddress@gmail.com
From: emailaddress@gmail.com
Cc: emailaddress@gmail.com
Subject: TEST
This is the body
```
