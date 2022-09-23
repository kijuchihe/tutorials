# Queues

Queue is a **_`First-In First-Out (FIFO)`_** data structure. First In, first out
has the same concept as first come, first serve

A queue has two major functions which are

- `enqueue`: To add an item to a queue to the end of the queue. Just like when
  waiting on a line to buy something or make a transaction and someone comes to
  join to the end of the line
- `dequeue`: This refers to removing an item from the queue. Just like when its
  your turn to be called to the doctor's office and then you leave the
  line(queue)

## Python `deque` library

Python provides a `deque` `(double-ended que)` library for making and working
with queues. The library provides the `append()` function to `enqueue` an item
and a `popleft()` function to `dequeue` an item.

The library actually has methods for removing from both ends of the queue but we
want to just add from one end and remove from one end

```py
from collections import deque
my_queue = deque()
my_queue.append(5)
my_queue.append(10)
print(my_queue)
# deque([5, 10])
print(my_queue.popleft())
# 5
```

> Fun exercise: Creating a wrapper class for the queue

```py
class Queue():
    def __init__(self):
        self.queue = deque()
    def enqueue(self):
        self.queue.append()
    def dequeue(self):
        if len(self.queue) > 0:
            return self.queue.popleft()
        else:
            return None
    def get_size(self):
        return len(self.queue)
```
