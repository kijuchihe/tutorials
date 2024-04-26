# Higher order functions

In JavaScript, higher-order functions (HOFs) are functions that deal with other functions in a special way. Here's a breakdown of what they are and how they are used:

## What are Higher-Order Functions?

There are two main ways in which a function can be considered higher-order:

- Takes Functions as Arguments: A higher-order function can accept one or more functions as arguments. These functions are then treated like any other value passed to the higher-order function.

- Returns a Function: A higher-order function can return a new function as its result. This returned function can capture variables from the outer function's scope, creating closures.

### Benefits of Using Higher-Order Functions

- Code Reusability: HOFs promote code reusability by allowing you to write generic functions that can operate on different types of data or perform common tasks without repetition.
- Abstraction: They help abstract away repetitive patterns, making your code more concise and readable.
- Declarative Style: HOFs encourage a more declarative coding style, where you focus on "what" needs to be done rather than the nitty-gritty of "how" to do it step-by-step.

### Common Examples of Higher-Order Functions in JavaScript

- `map()`: This function iterates over an array and applies a provided function to each element, returning a new array with the results.

```js
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

- `filter()`: This function iterates over an array and creates a new array containing only the elements that pass a test implemented by the provided function.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
```

- reduce(): This function applies a function against an accumulator and each element in an array to reduce it to a single value.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0); // Initial value for accumulator
console.log(sum); // 15
```

- `forEach()`: This function executes a provided function once for each element in an array.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});
// Output: 1, 2, 3, 4, 5 (logs each number on a new line)
```
