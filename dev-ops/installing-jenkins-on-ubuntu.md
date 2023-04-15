# Installing Jenkins

```sh
wget -q -O- https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
```
The above should return OK

```sh
sudo apt update
```

```sh
sudo apt install jenkins
```
