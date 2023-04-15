# Trees

## Terminologies

- A point on the tree is a `node`.
- Each brach or connection between two nodes is called an `edge`.
- At the very top of the tree is the `root` or `root node`.
- In a tree we can have parent nodes and child nodes.
  - In a binary treee, a `parent` can have up to 2 `children` though not all
    trees are binary. A left and right right child.
  - Some trees can have up to 5
- Nodes with the same parent are called `sibling` nodes.
- Bottom nodes at the very bootom of the tree are called `leaf` nodes
- A sub tree is any part of the tree that can form a tree on its own
- In a binary search tree, every parent node is greater than its left `sub tree`
- In a binary search tree, each parent node is less than any node in its
  `right sub tree`

## Binary Search Trees

## Operations

- Insert
- find
- delete
- get_size
- traversals

### Insert

To insert, you start out with comparisons to the root node.

So to insert the item: we compare it to the root node and see if it is less than
the root and if so, we add it to the left of the root else we add it to the
right. Note that at the end of all comparisons, the node will be added as a leaf
node

So in your comparison if the node you want to insert is less than the compared
node, it will be taken to the left, else, it will be taken to the right

### find

In the find method, comparisons are also made. Starting from the root, we
continue to compare just like we compare in the add method till we get the item

```py
if found:
    return data
else:
    return False
```

### delete

- Deleting a leaf node:
  - This is the simplest as you can delete the leaf node without affecting the
    flow of the tree
- Deleting a node with 1 child:
  - If we want to delete this, we'll promote the child to its current postion
- Deleting a node with 2 children: You'll first decend down its right child and
  replace the item to be deleted by the left child of the right child

### Size

The size of a tree is the number of nodes it has including the root

`size of tree = 1 + size of left sub tree + size of right sub tree`

### Traversals

Sometimes we need to traverse the data in a tree

Some treversal algorithms include

- preorder
- level
- inorder treversal
- postorder

In preorder treversal, we number from the root towards the left from the root.
We work our way down from the top.

In inorder traversal, we make our way up from the leaf nodes i.e. starting from
the left. The numbering is in order of size

## Advantages of Binary Search Trees

- They use recursion for most of their operations which can be easy to implement
- Speed (quick in locating items)
- You can find, delete and insert in:
  - `O(h) = O(log n)`
  - Big O means an approximation of how many operations it takes to do something
  - In a balanced BST with 10,000,000 nodes requires just 30 comparisons to
    perform its operations
  - No duplicates

```py
class Tree():
  def __init__(self, data, left=None, right=None):
    # You can pass in the left sub tree and the right sub tree
    self.data = data
    self.left = left
    self.right = right

  def insert(self, data):
    if self.data == data:
      return False
    elif self.data > data:
      if self.left is not None:
        return self.left.insert(data)
      else:
        self.left = Tree(data)
        return True
    else:
      if self.right is not None:
        return self.right.insert(data)
      else:
        self.right = Tree(data)
        return True

  def find(self, data):
    if self.data == data:
      return data
    elif self.data > data:
      if self.left is None:
        return False
      else:
        return self.right.find(data)

  def get_ssize(self):
    if self.left is not None and self.right is not None:
      return 1 + self.left.get_size() + self.right.get_size()
    elif self.left:
      return 1 + self.left.get_size()
    elif self.right:
      return 1 + self.right.get_size()
    else:
      return 1

  def preorder(self):
    if self is not None:
      print(self.data, end=" ")
      if self.left is not None:
        self.left.preorder()
      if self.right():
        self.right.preorder()

  def inorder(self):
    if self is not None:
      if self.left is not None:
        self.left.inorder()
      print(self.data, end=" ")
      if self.right is not None:
        self.right.inorder()
```
