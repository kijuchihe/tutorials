# Declare Command

This command helps you to update attributes applied to variables within the
scope of your shell

> In your terminal,

```sh
cd Desktop/
declare -p
```

This will show the variables of your system

```sh
declare myvariable
# This will create a variable
```

```sh
declare myvariable=22
```

## Creating readonly variables

You can also create readonly variables as well

```sh
declare -r pwdfile=/etc/passwd

echo $pwdfile #this will print out the value

pwdfile=/etc/abc.txt #This wont because pwdfile is a readonly variable
```
