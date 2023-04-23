# Numbers and Arithmetic

```sh
#! /bin/bash

echo 31+21
# output 31+21
# The arithmetic is not done for you
```

```sh
#! /bin/bash

n1=4
n2=20

echo $(( n2 + n1 ))
echo $(( n2 - n1 ))
echo $(( n2 / n1 )) # This doesn't show the float form
echo $(( n2 * n1 ))
echo $(( n2 % n1 ))
```

```sh
#! /bin/bash

echo 31+21
# output 31+21
# The arithmetic is not done for you
```

```sh
#! /bin/bash

n1=4
n2=20

echo $(expr $n1 + $n2 )
echo $(expr $n1 \* $n2 )
```

## Converting

```sh
echo "Enter a hexadecimal number"
read hex

echo -n "The decimal value of $hex is:"

echo "obase-10; ibase-16; $hex" | bc
```
