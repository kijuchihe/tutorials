# Dictionaries

These are key value pair structures. There are equivalents in other programming
languages like hash-maps in java

## Characteristics

- Key value pairs
- They are not ordered and therefore can't be sorted. They can be converted to
  lists and then sorted

## Making Dictionaries

### Literals

```py
x = {
    "pork": 25.3,
    "beef": "novalue",
    "prices" : [1, 2, 3,],
}
```

### Using the `dict()` function

```py
x = dict([
    ("pork", 25.3),
    ("beef", "novalue"),
    ("prices", [1, 2, 3])
])

y = dict(pork=25.3, beef=33.8, chicken=22.7)
```

## Dictionary Operations

### Adding or creating

This will update an item if the ["key"] exists but will create a new item in the
dictionary if it doesn't exist

```py
x["shrip"] = 18.2
print(x)
```

### Deleting

```py
del(x["shrimp"])
print(x)
```

### Length of the dictionary (number of `key: value` pairs)

```py
print(len(x))
```

### Clear

This means removing all the items in the dictionary

```py
x.clear()
print(x)
```

### Deleting the dictionary

```py
del(x)
```

## Accessing Items in the dictionary

```py
x = {
    "pork": 25.3,
    "beef": "novalue",
    "prices" : [1, 2, 3,],
}
print(x.keys())
# dict_keys(["pork", "beef", "prices"])

print(x.values())
# dict_values()

print(x.items())
# dict_items()

print("pork" in y) # Searches only the keys
# True

print("novalue" in y.values())
# True
```

## Iterating a dictionary

Note that when iterating over a dictionary, the items are in random order and
have no specific indeces

```py
x = {
    "pork": 25.3,
    "beef": "novalue",
    "prices" : [1, 2, 3,],
}

for key in x:
    print(key, x[key])

for key, value = x.items():
    print(key, value)
```
