# Linked Lists

Linked lists are a linear data structure where elements (called nodes) are not stored in contiguous memory locations. Instead, each node holds the data and a reference (or pointer) to the next node in the sequence.

This allows for dynamic resizing of the list as you can add or remove nodes without worrying about shifting elements in memory.

## Types of Linked Lists

1. Singly Linked lists
2. Doubly Linked Lists
3. Circular Linked Lists
   - Singley circular
   - Doubly Circular

```ts
class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

class LinkedList<T> {
  private head: Node<T> | null = null;

  // Add a new node to the beginning of the list
  public push(data: T): void {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  // Remove the first node from the list
  public pop(): T | null {
    if (this.head === null) {
      return null;
    }
    const removedNode = this.head;
    this.head = this.head.next;
    return removedNode.data;
  }

  // Check if the list is empty
  public isEmpty(): boolean {
    return this.head === null;
  }

  // Insert a new node at a specific position (0-based indexing)
  public insert(data: T, index: number): void {
    if (index < 0) {
      throw new Error("Index cannot be negative");
    }

    if (index === 0) {
      this.push(data);
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode === null) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(data, currentNode.next);
    currentNode.next = newNode;
  }

  // Search for an element in the list and return its index (if found)
  public find(data: T): number | null {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return null;
  }
}

// Example usage
const list = new LinkedList<number>();
list.push(10);
list.push(20);
list.insert(30, 1);

console.log(list.pop()); // Output: 20
console.log(list.find(30)); // Output: 1
```

```ts
// MY implementation.

class Node<T> {
    public data: T
    next: T | null
    constructor(data: T){
        this.data = data,
    }
}

class LinkedList<T> {
    public head: T

    append (data) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }
        let current = this.head
        while (current){
            if (!current.next)
        }
    }
}
```

```ts
class DoublyNode<T> {
  constructor(
    public data: T,
    public next: DoublyNode<T> | null = null,
    public prev: DoublyNode<T> | null = null
  ) {}
}

class DoublyLinkedList<T> {
  private head: DoublyNode<T> | null = null;
  private tail: DoublyNode<T> | null = null;

  // Add a new node to the end of the list
  public push(data: T): void {
    const newNode = new DoublyNode(data);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Remove the first node from the list
  public pop(): T | null {
    if (this.head === null) {
      return null;
    }
    const removedNode = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return removedNode.data;
  }

  // Check if the list is empty
  public isEmpty(): boolean {
    return this.head === null;
  }

  // Insert a new node at a specific position (0-based indexing)
  public insert(data: T, index: number): void {
    if (index < 0) {
      throw new Error("Index cannot be negative");
    }

    if (index === 0) {
      this.push(data);
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode === null) {
      throw new Error("Index out of bounds");
    }

    const newNode = new DoublyNode(data);
    if (currentNode === this.head) {
      newNode.next = currentNode;
      currentNode.prev = newNode;
      this.head = newNode;
    } else if (currentNode === this.tail) {
      newNode.prev = currentNode;
      currentNode.next = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = currentNode.prev;
      newNode.next = currentNode;
      currentNode.prev!.next = newNode;
      currentNode.prev = newNode;
    }
  }

  // Search for an element in the list and return its index (if found)
  public find(data: T): number | null {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return null;
  }
}
```
