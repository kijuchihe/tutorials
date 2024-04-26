# control statements in js

Control statements in JavaScript are used to control the flow of the program based on certain conditions. There are two main categories of control statements: conditional statements and iterative statements.

## Conditional Statements

- if statement: Executes a block of code if a specified condition is true.

```ts
if (condition) {
  // code to be executed if the condition is true
}
```

- if…else statement: Executes one block of code if the condition is true and another block of code if the condition is false.

```ts
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}
```

- else if statement: Allows for checking multiple conditions in a sequential manner. If the first condition is false, the next condition is checked, and so on.

```ts
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
  // code to be executed if condition1 and condition2 are false and condition3 is true
} else {
  // code to be executed if all conditions are false
}
```

- Ternary operator (?:): A shorthand way of writing conditional statements. It consists of a condition followed by a question mark, then the value to return if the condition is true, and finally a colon followed by the value to return if the condition is false.

```ts
condition ? value_if_true : value_if_false;
```

- Switch statement: Evaluates an expression, matching the expression’s value to a case clause, and executes the statements associated with that case.

```ts
switch (expression) {
  case value1:
    // code to be executed if the expression matches value1
    break;
  case value2:
    // code to be executed if the expression matches value2
    break;
  default:
  // code to be executed if the expression doesn't match any case
}
```

## Iterative Statements

- for loop: Repeats a block of code for a specific number of times.

```ts
for (initialization; condition; increment) {
  // code to be executed in each iteration
}
```

- while loop: Repeats a block of code until a specified condition evaluates to false.

```ts
while (condition) {
  // code to be executed in each iteration
}
```

- do…while loop: Repeats a block of code at least once and then continues to repeat the block as long as a specified condition evaluates to true.

```ts
do {
  // code to be executed in each iteration
} while (condition);
```

- for…in loop: Iterates over the properties of an object.

```ts
for (variable in object) {
  // code to be executed for each property of the object
}
```

- for…of loop: Iterates over the values of an iterable object (such as an array).

```ts
for (variable of iterable) {
  // code to be executed for each value of the iterable
}
```
