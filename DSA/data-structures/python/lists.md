# Lists

- They are the most general purpose data structures used in python
- They are the most widely used in puthon
- They grow and shrink size as needed
- They are a sequence type of data structure
- They are sortable

## Creating Lists

### Method 1 (using the `list()` function)

---

```py
x = list()
tuple1 = (10, 20)
y = list(tuple1)
string1 = "some_string"
z = list(string1)
```

### Method 2 (literals)

---

```py
y = ["a", 25, { "name": "Kingsley" }, 8.34]
```

### Method 2 (list comprehension)

This involves creating lists from statements

```py
a = [m for m in range(8)]
print(a)
b = [i**2 for i in range(10) if i > 4]
```

## Deleting

using the `del` keyword

```py
x = [5, 3, 8, 6]
del(x[1])
print(x) # [5, 8, 6]
del(x) # list x no longer exists
```

## Appending

```py
x = [5, 3, 4, 6]
x.append(7)
print(x)
```

## Extenting

This is used to append a sequence to list. This is similar to the the

```py
x = [5, 3, 8, 6]
y = [12, 13]
x.extend(y)
print(x)
# [5, 3, 8, 6, 12, 13]
```

## Inserting

This refers to inserting an item at a given index

> Syntax: `list.insert(index, item)`

```py
x = [5, 3, 8, 6]
x.insert(1, 7)
print(x)
# [5, 7, 3, 8, 6]

x.insert(1, ["a", "m"])
print(x)
# [5, ["a", "m"], 7, 3, 8, 6]
```

### Popping

This refers to removing the last item of a list using the `pop` method of the
list

```py
x = [5, 3, 8, 6]
x.pop()
print(x)
# [5, 3, 8]

print(x.pop())
# 8
```

### Removing

```py
x = [5, 3, 8, 6, 3]
x.remove(3)
print(x)
# [5, 8, 6, 3]
```

### Reverse

```py
x = [5, 3, 8, 6]
x.reverse()
print(x)
# [6, 8, 3, 5]
```

### Sort

---

> Using the `sorted(x)` function will return a **new list** without changing the
> original while using the sort method `x.sort()` puts the items of x in a
> sorted form

```py
x = [5, 3, 8, 6]
x.sort()
print(x)
# [3, 5, 6, 8]
```

### Reverse Sorting

---

This makes use of the `reverse=True` parameter in the `.sort()` method

```py
x = [5, 3, 8, 6]
x.sort(reverse=True)
print(x)
# [8, 6, 5, 3]
```
