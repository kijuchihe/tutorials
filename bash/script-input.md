# Script Input

```sh
#! /bin/bash

echo $1 $2 $3
```

This will make you pass in input, when calling the script, you

```sh
./helloScript value1 value2 value3
```

- $1 -> value1
- $2 -> value2
- $3 -> value3

```sh
#! /bin/bash

echo $1 $2 $3 $4
```

```sh
./helloScript value1 value2 value3
```

> Notice how the name of the script was passed as an argument

- $1 -> ./helloScript.sh
- $2 -> value1
- $3 -> value2
- $4 -> value3

## Storing the values in an array

```sh
#! /bin/bash

args=("$@") # This $@ represents unlimited number of inputs to the array.

echo ${args[0]} #This prints out the item with index 0
```

> To print everything out,

```sh
#! /bin/bash

args=("$@") # This $@ represents unlimited number of inputs to the array.

echo $@
```

> To print out the length of the array,

```sh
#! /bin/bash

args=("$@") # This $@ represents unlimited number of inputs to the array.

echo $@

echo $#
```

## Using stdin

```sh
while read line
do
    echo "$line"
done < "${1:-/dev/stdin}"

#"${fileVariable:-pathToStdin}"
# If no file is passed to it, it will assume that the terminal is the file and whatever is typed into it will be reprinted
```
