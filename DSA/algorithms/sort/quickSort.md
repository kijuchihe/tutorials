# Quick sort algorithm

Quick sort is a divide-and-conquer sorting algorithm that works by selecting a pivot element from the array and partitioning the remaining elements into two sub-arrays:

- Elements less than the pivot: These are placed before the pivot in the final sorted array.
- Elements greater than or equal to the pivot: These are placed after the pivot.

The algorithm then recursively sorts the two sub-arrays. This process continues until all sub-arrays have only one element (already sorted).

Here's the breakdown of how it works:

- Base Case: If the array has one or zero elements, it's already sorted, so return the array.
- Choose a Pivot: Select a pivot element (commonly the first, last, or a random element).
- Partitioning: Rearrange the array such that all elements less than the pivot are placed before it, and all elements greater than or equal to the pivot are placed after it. This doesn't necessarily sort the sub-arrays yet, but positions elements relative to the pivot.
- Recursive Calls: Recursively call quick sort on the sub-array of elements less than the pivot and the sub-array of elements greater than or equal to the pivot.
