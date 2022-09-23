# Tuples

Note that ("string") is not a tuple. For a tuple with one item to be considered
a tuple, the item in the tuple must have a comma after it

```py
("string",)
```

## Characteristics

- Immutable (therefore can't be changed [added to or removed])
  - However the items in the tuple are mutable even though the tuple itself
    can't be changed
- They are useful when working with gixed data
- They are faster than lists
- They are a sequence type data structure

## Ways of making Lists

### Using literals

This is the most common method of making tuples

```py
x = ()
x = (1, 2, 3)
x = (2,)
x = 2, # Notice that a comma was put after the value
x = 1, 2, 3
print(x, type(x))
# (2,) <class 'tuple'>
```

### Using the `tuple` keyword

```py
list1 = [2, 4, 6]
x = tuple(list1)
print(x, type(x))
# (2, 4, 6) <class 'tuple'>
```

## Mutability of Tuples

```py
x = (1, 2, 3)
# del(x[1])                    # fails
# x[1] = 8                     # fails
print(x)
# (1,  2, 3)


y = ([1, 2], 3) # A tuple with the first item as a list
del(y[0][1])
print(y)
# ([1], 3)

y += (4,) # Concatenating tuples is correct
print(y)
# ([1], 3, 4)
```
