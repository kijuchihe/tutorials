# Stacks

A stack is a **_`Last-In First-Out (LIFO)`_** data structure

That means the push and pop operation only affect the top of the stack. So if
you are adding an item, it is added to the top of the stack and if you are
removing an item, it is removed from the top(first-item) of the stack.

The only way to access the last item of the stack is to first remove all the
items above it

## Stack Operations

- `push`: This involves pushing an item to the top of the stack
- `pop`: This involves removing an item from the top of the stack
- `peek`: This involves getting an item from the top of the stack (of course)
  without removing from the stack
- `clear`: This clears all the items from the stack

## Use Cases

### The command Stack

All computer programs track what command you use and most programs have the
option of undoing the command. To do that, it has to keep track of all the
commands you've executed in the order you executed it. It does that using a
stack. Anytime you execute a command, it pushes the command to the stack and
when you click undo, it pops the last command.

## Implementation in Python

Python lists are already a good basis on which stacks can be built and python
gives most of the functionality needed for stacks with lists

```py
my_stack = list()
my_stack.append(4)
my_stack.append(7)
my_stack.append(12)
my_stack.append(19)
print(my_stack)
# [4, 7, 12, 19]
```

```py
print(my_stack.pop())
19
print(my_stack.pop())
12
print(my_stack)
[4, 7]
```

## Creating a custom stack

We can actually create a `Stack` class and have its base be a list

```py
class Stack():
    def __init__(self):
        self.stack = list()
    def push(self, item):
        self.stack.append(item)
    def pop(self):
        if len(self.stack) > 0:
            return self.stack.pop()
        else:
            return None
    def peek(self):
        if len(self.stack) > 0:
            return self.stack[len(self.stack) - 1]
        else:
            return None
    def __str__(self):
        return str(self.stack)



# Testing the stack

my_stack = Stack()
my_stack.push(1)
my_stack.push(3)
print(my_stack)
# [1, 3]

print(my_stack.pop())
# 3
print(my_stack.peek())
# 1
print(my_stack.pop())
# 1
print(my_stack.pop())
# None
```
