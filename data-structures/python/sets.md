# Sets

## Characteristics

- They store `non-duplicate` or `unique` items
- They have very fast access compared to lists
  - One of the reasons being that it hashes all its items and you can find the
    item easily using its hash
- They support mathematical set operations like union and intersection
- Sets are unordered

## Creating a set

### Using the literals

```py
x = {3, 5, 3, 5}
print(x)
# {3, 5} # Notice that there are no duplicates


```

### Using the `set()` function

```py
y = set()
print(y)
# set()

list1 = [2, 3, 4]
z = set(list1)
print(z)
```

## Set Operations

```py
x = {3, 8, 5}
print(x)
# {8, 3, 5}

x.add(7)
print(x)
# {8, 3, 5, 7}

x.remove(3)
print(x)
# {8, 5, 7}

# Getting length
print(len(x))
# 3

# Checking membership
print(5 in x)
# True

# Pop random item from set x since it is unordered.
# Items in a set don't have indeces
print(x.pop(), x)
# 8, {7, 5}

Delete all items from set x
x.clear()
print(x)
set()
```

## Mathematical Operations of A Set

- Intersection (AND): `set1 & set2`
- Union (OR): `set1 | set1`
- Symmetric Difference (XOR): `set1 ^ set2`. The items that are in one set or
  the other but not both:
  - Mathematically, it could be `union - intersection`
- Difference (in set1 but not set2): `set1 - set2`
- subset (set2 contains set1): `set1 <= set2`
- superset (set1 contains set2): `set1 >= set2`

```py
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1 & s2) # {3}
print(s1 | s2) # {1, 2, 3, 4, 5}
print(s1 ^ s2) # {}
print(s1 - s2)
print(s1 <= s2) # False
print(s1 >= s2) # False
```
