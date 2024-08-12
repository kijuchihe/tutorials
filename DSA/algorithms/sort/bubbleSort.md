# Bubble Sort Algorithm

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, indicating the list is sorted.

Here's a breakdown of how it works:

Initialization: We iterate through the list n-1 times (where n is the length of the list). This is because the largest element will bubble to the end in the first pass itself.

Comparison and Swapping: In each pass, we compare adjacent elements. If the current element is greater than the next element, we swap them. This effectively "bubbles" the larger element towards the end of the list.

Repeating the process: We repeat steps 1 and 2 for all passes (n-1 times). With each pass, the largest element gets placed in its correct position at the end of the list.

## PSEUDO CODE

```md
- Set iterations to the length of the array minus 1 (since the largest element will be positioned in the last iteration).

- Loop through the array for iterations times:
  - Loop through the array from the beginning (index 0) up to the length minus the current iteration (n-i-1):
  - If the current element (array[j]) is greater than the next element (array[j+1]):
  - Swap the current element with the next element.
- Return: The sorted array.
```

```ts
function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
const numbers = [5, 3, 1, 4, 2];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
```
