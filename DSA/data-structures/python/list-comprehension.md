# Pthon List Comprehension

This involves creating a new list basically using a sort of comprehension or for
loop or iteration

The basic format `new_list = [transform sequence [optional_filter] ]`

```py
import random
```

```py
## Getting values within a range
under_10 = [x for x in range(10)]
print("under_10:", under_10)


## Getting Squared Values
squares = [x**2 for x in under_10]
print("squares:", squares)


## Getting odd numbers using mod
odds = [x for x in range(10) if x % 2 == 1]
print("odds", odds)


## Getting multiples of 10
mot = [x * 10 for x in range(10)]
print("multiples of ten", mot)


## get all numbers in a string
s = "Th1s string has the number 2 0r the number 3 in it"
nums = [x for x in s if x.isnumeric()]
print("numbers:", nums)

## Getting the index of a list item
names = ["Cosmo", "Pedro", "Anu", "Ray"]
idx = [k for k, v in enumerate(names) if v == "Anu"]
print("index", idx[0])


## Deleting an Item from a list
letters = [x for x in "ABCDEF"]
random.shuffle(letters)
letrs = [a for a in letters if a != "C"]
print(letters, letrs)
```

## Using `if-else`

If you would like to use an if-else statement in a list comprehension, make sure
it comes before the loop but if you are using just the if statement, then it
comes after the loop

```py
nums = [5, 3, 10, 18, 6, n7]
new_list = [x if x % 2 == 0 else 10 * x for x in nums]
print("new_list", new_list)
```

## Netsted loop iteration

```py
a = [[1, 2], [3, 4]]
new_list = [x for b in a for x in b]
print(new_list)
```
