# String processing

## String comparison

```sh
#! /bin/bash

echo "enter 1st string"
read st1


echo "enter 2nd string"
read st2

if [ "$st1" == "$st2" ]
then
    echo "both strings are equal"
else
    echo "Strings don't match"
fi
```

```sh
#! /bin/bash

echo "enter 1st string"
read st1


echo "enter 2nd string"
read st2

if [ "$st1" \< "$st2" ]
then
    echo "The first string is shorter"
elif [ "$st2" \< "$st1" ]
then
    echo "String2 is shorter"
else
    echo "Both strings are equal in length"
fi
```

## Concantenation

```sh
echo "enter 1st string"
read st1


echo "enter 2nd string"
read st2

c=$st1$st2

echo $c
```

## Changing case

```sh
echo "enter 1st string"
read st1


echo "enter 2nd string"
read st2

echo ${st1^} # For lower case
echo ${st1^^} # For upper case

```

## Capitalizing

To capitalize, you have to mention the item you want to capitalize

```sh
echo "enter 1st string"
read st1


echo "enter 2nd string"
read st2

echo ${st1^l} # Here you're saying you want to capitalize the letter l


```
