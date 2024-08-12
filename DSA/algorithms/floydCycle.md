# Floyd's Cycle Finding Algorithm

This is used to check if a list is cyclic. This is sometimes referred to as Rabbit and Hare

```ts
function hasCycle(head: Node | null): boolean {
  // Handle empty list or list with only one node
  if (!head || !head.next) {
    return false;
  }

  // Initialize slow and fast pointers
  let slow: Node | null = head;
  let fast: Node | null = head;

  // Traverse the list using slow and fast pointers
  while (fast && fast.next) {
    slow = slow!.next; // Use non-null assertion for clarity (optional)
    fast = fast.next.next;

    // If slow and fast pointers meet, there's a cycle
    if (slow === fast) {
      return true;
    }
  }

  // No cycle detected if pointers don't meet
  return false;
}

// Example usage
const node1: Node = { value: 1, next: null };
const node2: Node = { value: 2, next: null };
const node3: Node = { value: 3, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node1; // Create a cycle

const hasLoop = hasCycle(node1);
console.log(
  hasLoop ? "Linked list has a cycle" : "Linked list does not have a cycle"
);

// Output: Linked list has a cycle
```

> The way I would have solved the leetcode question

```ts
function hasCycle(head: Node | null): boolean {
  const isFound = new Set();
  let current = head;
  while (current) {
    if (isFound.has(current)) return true;
    isFound.add(current);
    current = current.next;
  }
  return false;
}
```
