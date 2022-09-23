# MaxHeaps

The underlying data structure will be a python list and the functions of
max-heaps are not so different from that of stacks or queues

The graphical representation of a max heap looks like a tree

Every node is less than or equal to its parent. The parent item has a value
either greater than or equal to that of its child (or children). The reason it's
like that is so that we can remove the max number any time that we want. Any
time we want to pop the top number in the heap, we know that it is the biggest
number

A MaxHeap is very very fast i.e. the response time for a max heap is extremely
fast

- insert in `O(log n)`:
  - You can insert an item into a max-heap in `Big-O of log n (time)`
- get max in `O(1)`
  - You can get the max item in Big-O of 1 time
- remove max in `O(log n)`
  - You can remove an item into a max-heap in `Big-O of log n (time)`

## Implementation in python

They are easy to implement in python; though not as easy as stacks and queues

> Diagramically
>
> 25 is the parent and it has 2 children 16 and 24
>
> 16 has two children 5 and 11
>
> 5 (child of 16) has two children 2 and 3
>
> 11 has one child 5
>
> 24 has two children 19 and 1

The indexing or numbering is done vertically and from left to right

| Item | Index(Numbering) |
| ---- | ---------------- |
| 25   | 1                |
| 16   | 2                |
| 24   | 3                |
| 5    | 4                |
| 11   | 5                |
| 19   | 6                |
| 1    | 7                |
| 2    | 8                |
| 3    | 9                |
| 5    | 10               |

If you look at the above, you might ask: why is 16 coming before 24. Well in the
tree representation, it is greater than all its children. The base law of
maxHeaps is that a parent must be greater than all its descendants but doesn't
need to be greater that its sibling

## Accessing items

Since the numbering of our items starts from one, the following should be noted

if the index of a parent is x:

- index of the left child = `x * 2`
- index of the right child = `(x * 2) + 1`

From the above, we can also decipher that if the index is an even number, it is
a left child. If not, it is a right child.

It can also be seen that to find:

- the index of a parent of a right child which has an index of y, we do
  `(y-1)/2`
- the index of a parent of a left child which has an index of y, we do `(y)/2`

## Operations of MaxHeap

- `push`: Inserting an item
- `peek`: Getting the max item without popping it off
- `pop`: Removing the maximum item

### Adding a value

To add a value:

- We add an item to the end of the array
- Next, we float it up to its propper position in the heap (sorting it)

So let's say we want to add 12 to the heap, we'll push it to the last spot
(which will be a child of 11 using our above diagrams).

Next, to take it to its correct position, we have to check it with its parent.
Is the added item (12) greater than its parent (11). Yes it is!

Since that is true, 12 and 11 will swap positions. Then now you check the value
(12) with its new parent (16). Is 12 greater than 16? No!

So that means the transaction is complete😁😂

### Peeking

This returns the first number (which is also the maximum number in the heap)
`heap[1]`

### Popping

This will do the following steps:

- Move the maximum value to the end of the array
- delete it
- bubble down the current item at index 1 to where its supposed to be
- return the maximum

So if we use our above heap, we know that 11 is the last item now since we
pushed in 12

- We swap 25 with 11 (now 11 is at the start of the heap)
- We can remove 25 comfortably without affecting the heap flow since it is at
  the last place of the heap
- Next we start comparing (11) with its children (which are 16 and 24).
- We replace it with the highest number (24). Now 11 has children 19 and 1
- Then we compare again: and since 19 is greater than 11, they swap positions.
- Now 19 will be the parent with the children 11 and 1
- Return the 25 we pulled off

## The code

MaxHeap always bubbles the highest value to the top, so it can be removed
instantly.

Public function (accessible by whoever uses the function): push, peek and pop

Private functions(): swap, `__floatUp`, `__bubbleDown`, `__str`

```py
class MaxHeap():
    def __init__(self, items=[]):
        super().__init__()
        self.heap = [0]
        for item in items:
            self.heap.append(item)
            self.__floatUp(len(self.heap) - 1)

    def push(self, data):
        self.heap.append(data)
        self.__floatUp(len(self.heap) - 1)

    def peek(self):
        if self.heap[1]:
            return self.heap[1]
        else:
            return False

    def pop(self):
        if len(self.heap) > 2:
            self.__swap(1, len(self.heap) - 1)
            max = self.heap.pop()
            self.__bubbleDown(1)
        elif len(self.heap) == 2:
            max = self.heap.pop()
        else:
            max = False
        return max

    def __swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

    def __floatUp(self, index):
        parent = index//2
        if index <= 1:
            return
        elif self.heap[index]>self.heap[parent]:
            self.__swap(index, parent)
            self.__floatUp(parent)

    def __bubbleDown(self, index):
        left = index * 2
        right = (index * 2) + 1
        largest = index
        if len(self.heap) > left and self.heap[largest] < self.heap[left]:
            largest = left
        if len(self.heap) > right and self.heap[largest] < self.heap[right]:
            largest = right
        if largest != index:
            self.__swap(index, largest)
            self.__bubbleDown(largest)

    def __str__(self):
        return str(self.heap)
```
