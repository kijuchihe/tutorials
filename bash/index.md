# Bash Scripting

`bash` stands for `Born Again Shell`.

In your terminal, if you type

```sh
cat /etc/shells
```

You'll see all the shells available on your system

To know the path

```sh
which bash
```

So let's create a new script file

```sh
touch helloScript.sh
```

Open the file in your text editor

```sh
#! /bin/bash
# The above is the path to the bash shell on your terminal

echo "Hello to scripting"
```

At first, this script is not executable. In your terminal

```sh
chmod -x helloScript.sh
```

Now the file is executable

To execute it,

```sh
./helloScript.sh
```
