# Variables in Python

Just like other programming languages, python has variables

Variables are like containers which contain data and can perform functions with
it

```py
name = "Kingsley"

print(name)
#Kingsley
```

As you can see, the python language doesn't need any keywords when declaring a
variable.

So variables are like adding tags to things. In the above case we added the tag
of `name` to the `string` (anything within quotes) and when we printed it out,
it came out as Kingsley

> The print function is an inbuilt function that comes with python to print out
> stuff

```py
price = 10
```

When this number ten is stored in the memory of the computer is stored in the
binary form in the computer. Then the variable is attached to it as a label

## Reassigning variables

We can also reassign variables

```py
value = 10
value = 20
print(value)
#Output: 20
```

The values of a variable can also be of any data type

```py
price = 10 #(Integer: int)
rating = 4.9 #(Floating point number: float)
name = "Mosh" #(String: str)
is_published = False #(Boolean: Bool)
```

### Python is case sensitive

It should be noted that python is case sensitive so `False` (which is a boolean)
is not the same as (`false`) which is not recognized by python

## Rules for naming variables

Python variables can have only letters, underscores, numbers and the dollar
sign.

### Tips for naming variables

- use lower cases for your variable names e.g. `name`, `age`
- multiname variables are separated with underscores and not hyphens (-) e.g.
  `full_name`
- Do not start a variable name with a number
- Use descriptive names for your variables so that other programmers can also
  understand

## [Previous](./intro.md)

## [Next](./comments.md)
