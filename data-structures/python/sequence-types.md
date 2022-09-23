# Sequences

- Strings
- Lists
- Tuples

## Concepts

### Indexing

### Negative Indexing

### slicing

`element[start: end+1: step(default=1)]`

### Concatenating

```py
x = "horse" + "shoe"
print(x) # horseshoe

y = ["pig" + "cow"] + ["horse"]
print(y) # ["pig" + "cow", "horse"]
```

### Multiplying

```py
x = "bug" * 3
print(x) # "bugbugbug"
y = [8, 5] * 3
print(y) # [8, 5, 8, 5, 8, 5]
```

### Checking Membership

```py
x = "bug"
print("u" in x)
# True

y = ["pig", "cow", "horse"]
print("cow" not in y )
# False
```

### Iterating

#### lists

```py
x = [7, 8, 3]
for item in x:
    print(item)

# Index and Item
y = [7, 8, 3]
for index, item in enumerate(y):
    print(index, item)

# Notice the enumarate function
```

### Number of Items

This involves using the `len` function which is built

```py
#string
x = "bug"
print(len(x))
# 3


#list
y = ["pig", "cow", "horse"]
print(len(y))
#3


#tuple
z = ("Kelvin", "Niklas", "Jenny", "Craig")
print(len(z))
#4

```

### Minimum item (lexicographically)

---

This involves using the `min` function. When finding the minimum, make sure all
the types in the list or tuple are either strings or numbers but not both

### Maximum item (lexicographically)

---

This involves using the `max` function. When finding the minimum, make sure all
the types in the list or tuple are either strings or numbers but not both

### Sum of items

---

This involves using the `sum` function. They have to be numeric: not strings and
not mixed

```py
# string -> error
# x = [5, 7, "bug"]
# print(sum(x)) #generatess an error


# list
y = [2, 5, 8, 12]
print(sum(y)) # 27
print(sum(y[-2:])) # 20

#tuple
z = (50, 4, 7, 19)
print(sum(z)) # 80
```

### Sorting

---

This returns a new `list` of items in sorted order but it does not change the
original item (sequence)

```py
# string

x = "bug"
print(sorted(x))
# ['b', 'g', 'u']

# list
y = ["pig", "cow", "horse"]
print(sorted(y))
# ["cow", "horse", "pig"]
```

### Sorting by the second letter

This can be done using a `lambda` function. Add a key parameter and a lambda
function to return the second character. (the word _`key`_ here is a defined
parameter name, _`k`_ is an arbitrary variable name)

```py
z = ("Kelvin", "Niklas", "Jenny", "Craig")
print(sorted(z, key=lambda k: k[1]))
```

### Counting a single item in a sequence

```py
# string
x = "hippo"
print(x.count("p"))
# 2


# list
y = ["pig", "cow", "horse"]
print(y.count("cow"))
# 1
```

### Getting the index of an item

```py
# string
x = "hippo"
print(x.index("p")) # Returns the index of the first occurrence
# 2

y = ["pig", "cow", "horse", "cow"]
print(y.index("cow"))
# 1
```

### Unpacking

You can unpack n items in a sequence to n variables

> Note that the number of variables has to be the exact number of items in the
> string or list that you are unpacking

```py
x = ["pig", "cow", "horse"]
a, b, c = x
print(a, b, c)
# pig cow horse
```
