# Loops

## While loop

This loop runs until the condition is false

```sh
#! /bin/bash

number=1
while [ $number -lt 10]
do
    echo "$number"
    number=$(( number+1 ))
done
```

## Until loop

This loop will run until the condition is true

```sh
#! /bin/bash

number=1
until [ $number -ge 10]
do
    echo "$number"
    number=$(( number+1 ))
done
```

## for loop

```sh
#! /bin/bash

for i in 1, 2, 3, 4, 5
do
    echo $i
done
```

```sh
#! /bin/bash

for i in {0..20}
do
    echo $i
done
```

The above will print out from 0 to 20

```sh
#! /bin/bash

for i in {0..20..2}
do
    echo $i
done
```

> The above will print out from 0 to 20 with an increment of 2

### another way of writing for loops

```sh
#! /bin/bash

for (( i=0; i<5; i++ ))
do
    echo $i
done
```

## Break Statement

```sh
#! /bin/bash

for (( i=0; i<10; i++ ))
do
    if [ $i -gt 5]
    then
        break
    fi
    echo $i
done
```

```sh
#! /bin/bash

for (( i=0; i<10; i++ ))
do
    if [ $i -eq 3 ] || [ $i -eq 7 ]
    then
        continue
    fi
    echo $i
done
```
