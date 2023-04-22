# Redirecting an output to a file

```sh
#! /bin/bash

echo "Hello this is good" > file.txt
```

```sh
#! /bin/bash

cat > file.txt
```

This will create some kind of interactive mode and whatever you type will be
passed into the `file.txt` and you can press `Ctrl + D` to come out of that
terminal shell

If you want to append text,

```sh
#! /bin/bash

cat >> file.txt
```
