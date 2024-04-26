# Narrowing in Typescript

In TypeScript, narrowing refers to the process of refining the type of a variable from a broader type to a more specific type within a certain code block or context. This refinement helps the TypeScript compiler understand the variable's actual type at that point in your code and also helps in intellisense, leading to better code safety and fewer errors.

Here's a breakdown of narrowing and its benefits:

## Why Use Narrowing?

- Improved Type Safety: By narrowing types, you can ensure that variables are used in a way that is consistent with their actual value. This helps prevent runtime errors caused by unexpected data types.
- Better Code Readability: Narrowing can make your code more readable by clarifying the intended type of a variable at different points in the program.
- Enhanced IDE Features: Type-aware IDEs can leverage narrowing to provide more accurate code completion, refactoring suggestions, and error checking.

## Common Techniques for Narrowing in TypeScript

- Conditional Statements: Using if, else if, and switch statements with type checks can narrow a variable's type based on the condition that evaluates to true.

```ts
let userInput: string | number = prompt("Enter a number or string:");

if (typeof userInput === "string") {
  userInput.toLowerCase(); // Safe to call toLowerCase() on a string
} else {
  userInput.toFixed(2); // Safe to call toFixed() on a number
}
```

- Type Guards: A type guard is a function or expression that checks the type of a variable and narrows it down based on the result. There are different types of type guards:
- Non-null Assertions: In some cases, you might be certain a variable has a value (not null or undefined). You can use the non-null assertion operator (!) to tell the compiler to trust you and treat the variable as having a specific type. However, use this with caution to avoid potential runtime errors if your assumption is wrong.

### TypeGuards

A type guard is a function or expression that checks the type of a variable and narrows it down based on the result. There are different types of type guards:

- **typeof Type Guard**: This checks the typeof operator against a specific type.

```ts
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  // Type string can easily infer the types of a and b
}

add(5, 5);
```

- **instanceof Type Guard:** This checks if an object is an instance of a particular class. So from the description, it can be seen that it is about classes.

```ts
class Animal {
  move() {}
}
class Dog extends Animal {
  bark() {}
}

let pet: Animal | Dog = new Dog();

if (pet instanceof Dog) {
  console.log(pet.bark()); // Safe to call on a Dog instance
}
```

- **in type Guard**

```ts
class Banana {
  isTasty() {}
}

class Apple {
  isJuicy() {}
}
type Fruit = Banana | Apple;

function buyFruit(fruit: Fruit): number {
  let price = 0;

  if ("isTasty" in fruit) {
    price = fruit.isTasty() ? 5 : 10;
    // Typescript can automatically infere that it is of type Banana just by looking into the class
  }
}
```

- **Equality narrowing**

```ts
function getValues(a: number | string, b: string) {
  if (a === b) {
    // For a to be equal to b, it has to be a string and typescript will infer that a is a string
    console.log(a);
  } else {
    console.log(b);
  }
}
```

- **User Defined Typeguards**

```ts
class Banana {
  isTasty(): boolean {
    return true;
  }
}

class Apple {
  isJuicy(): boolean {
    return true;
  }
}

type Fruit = Banana | Apple;

function isBanana(fruit: Fruit): fruit is Banana {
    return fruit instance of Banana
}
```

```ts
function isString(value: string | number): value is string {
  return typeof value === "string";
}

let someValue: string | number = "hello";

if (isString(someValue)) {
  console.log(someValue.toUpperCase()); // Safe to call on a string
}
```
