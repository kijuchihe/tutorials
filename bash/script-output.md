# Standard Output and Standard Error

When you type a command, it usually has a standard output and a standard error
output.

```sh
#! /bin/bash

ls -al 1>file.txt 2>file2.txt
```

For the above, the standard output will go to file.txt and the standard error
will go to file2.txt

```sh
#! /bin/bash

ls -al >file.txt
```

For the above, the standard output will go to file.txt and the standard error
will go to the terminal

```sh
#! /bin/bash

ls -al >file.txt 2>&1

# This can also be written as
ls -al >& file.txt
```

For the above, the standard output will go to file.txt and the standard error
will also go to file.txt
