# Linked Lists

Linked lists are composed of nodes (items in a linked list). Each node has a
link to the next node

You can store whatever data you want in a linked list. It could be a student
node or a payment node.

Each node has two part which are the:

- data
- next (a link to the next node)

The nodes form chain like structures and the number of nodes is only limited by
the amount of space you have. Each node has a pointer to the next node and on
the last node there is no more pointer

The first node is what we'll call the `root node`. We need a pointer that will
point to the very start of the node and we'll call that pointer the `root`

## Attributes of a linked list

- root: The pointer to the beginning of the list
- size: number of nodes in the list

## Operations

- find(data)
- add(data)
- remove(data)
- print_list()

### Adding

Imagine a node

> Syntax `[data|next]`

`[5|-] -> [17|-] -> [8|.]`

Now to add lets say a node with the data of 10

- We'll create a new node with the data of 10
- We make the pointer of that new node point to the root node
- We'll then make the root be that code conaining 10

### Removing

Let's say we want to remove the node that contains 5

- First we find the node that contains the data (we start from the root)
- You take the node that was before it (i.e. the node of 10) and then we set the
  pointer of that node (of 10) to the node after the node of 5. Hereby instead
  of the flow to be `node of 10 -> node of 5 -> node of 7`, it will be
  `node of 10 -> node of 7`
  - The five is still stere but it's essential removed from the link or chain

## Writing the code

### `Node` class

We're going to be creating a node class for different types of nodes to be
covered

Node class has a constructor that sets the data passed in and optionally ca

A node can have a previous node for doubly linked lists

```py
class Node():
    def __init__(self, d, n=None, p=None):
        self.data = d
        self.next_node = n
        self.prev_node = p

    def __str__(self):
        return f"({self.data})"
```

### `LinkedList` Class

A linkedlist object has two attributes: a root node that defaults to none and

Methods:

- add
- find
- remove
- print_list

```py
class LinkedList():
    def __init__(self, r=None):
        self.root = r
        self.size = 0

    def add(self, d):
        new_node = Node(d, self.root)
        self.root = new_node
        self.size += 1
    def find(self, d):
        this_node = self.root
        while this_node is not None:
            if this_node.data == d:
                return d
            else:
                this_node = this_node.next_node
        return None

    def remove(self, d):
        this_node = self.root
        prev_node = None

        while this_node is not None:
            if this_node.data == d:
                if prev_node is not None:
                    prev_node.next_node = this_node.next_node
                else:
                    self.root = this_node.next_node
                self.size -= 1
                return True
            else:
                prev_node = this_node
                this_node = this_node.next_node
        return False

    def print_list(self):
        this_node = self.root
        while this_node is not None:
            print(this_node, end='->')
            this_node = this_node.next_node
        print("None")
```

### `CircularLinkedList`

These are almost identical to regular linked lists but instead of the last node
to not have a pointer, it points back to the first node

Adding in circular linked lists:

- We add the second item after the root node and we leave the root node and the
  last node in their positions

Advantages over linked lists

- Ideal for modeling continuous looping objects such as a monopoly board or a
  race track

```py
class CircularLinkedList():
    def __init__(self, r=None):
        self.root = r
        self.size = 0

    def add(self, d):
        if self.size == 0:
            self.root = Node(d)
            self.root.next_node = self.root
        else:
            new_node = Node(d, self.root.next_node)
            self.root.next_node = new_node
        self.size += 1

    def find(self, d):
        this_node = self.root
        while True:
            if this_node.data == d:
                return d
            elif this_node.next_node == self.root:
                return False
            this_node = this_node.next_node

    def remove(self, d):
        this_node = self.root
        prev_node = none

        while True:
            if this_node.data == d:
                if prev_node is not None:
                    prev_node.next_node = this.node.next_node
                else:
                    while this_node.next_node != self.root:
                        this_node = this_node.next_node
                    this_node.next_node = self.root.next_node
                    self.root = self.root.next_node
                self.size -= 1
                return True
            elif this_node.next_node == self.root:
                return False
            prev_node = this.node
            this.node = this.node.next_node

    def print_list(self):
        if self.root is None:
            return
        this_node = self.root
        print(this_node, end="->)"
        while this_node.next_node != self.root:
            this_node = this_node.next_node
            print(this_node, end="->")
        print()
```

### `DoubleLinkedList`

These are sometimes called bidirectional linked lists

It has three parts which are

- The data
- The pointer to the previous node
- The pointer to the next node

To delete an item, the pointer of the previous node will then point to the node
after the element to be deleted

Advantages:

- Iterating through in any direction
- You can save time
- Delete a node without iterating through the entire list if you have a pointer
  to that node

```py
class DoublyLinkedList():
    def __init__(self, r=None):
        self.root = r
        self.last = r
        self.size = 0

    def add(self, d):
        if self.size == 0:
            self.root = Node(d)
            self.last = self.root
        else:
            new_node = Node(d, self.root)
            self.root.prev_node = new_node
            self.root = new_node
        self.size += 1

    def find(self, d):
        this_node = self.root
        while this_node is not None:
            if this_node.data == d:
                return d
            elif this_node.next_node == None:
                return False
            else:
                this_node = this_node.next_node


    def remove(self, d):
        this_node = self.root
        while this_node is not None:
            if this_node.data = d:
                if this_node.prev_node is not None:
                    if this_node.next_node is not None:
                        this_node.prev_node.next_node = this_node.next_node
                        this_node.next_node.prev_node = this_node.prev_node
                    else:
                        this_node.prev_node.next_node = None
                        self.last = this_node.prev_node
                else:
                    self.root = this_node.next_node
                    this_node.next_node.prev_node = self.root
                self.size -= 1
                return True
            else:
                this_node = this_node.next_node
        return False


    def print_list(self):
        if self.root is None:
            return
        this_node = self.root
        print(this_node, end="->)"
        while this_node.next_node != self.root:
            this_node = this_node.next_node
            print(this_node, end="->")
        print()
```
