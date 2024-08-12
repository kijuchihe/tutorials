# Generic Types in Typescript

Generics in TypeScript are a powerful feature that allows you to write code that works with a variety of data types, while still maintaining type safety. This means you can create reusable components, functions, and data structures that can be used with different types of data without having to rewrite the code for each type.

Here's a breakdown of generics and how they work:

Concept

Generics use type parameters which act as placeholders for specific data types.
These placeholders are written within angle brackets (< >).
You can then use these type parameters throughout your code to define the types of variables, function arguments, return types, and more.

## Benefits

- Reusability: Write code that can handle different data types without needing to be rewritten for each type.
- Type Safety: Maintain type safety throughout your code, ensuring type compatibility and catching errors early.
- Readability: Code with generics can be more readable and easier to understand, as the intent is clear.

```ts
function identity<T>(value: T): T {
  return value;
}

let numberIdentity = identity<number>(10); // numberIdentity is of type number
let stringIdentity = identity<string>("hello"); // stringIdentity is of type string
```

In this example, the identity function is generic with a type parameter T. This allows it to accept a value of any type T and return the same value. The specific type is determined when the function is called with a specific data type.

Using Generics with Classes and Interfaces

Generics can also be used with classes and interfaces to create reusable components that work with different data types.

Working with Generic Type Variables
When you begin to use generics, you’ll notice that when you create generic functions like identity, the compiler will enforce that you use any generically typed parameters in the body of the function correctly. That is, that you actually treat these parameters as if they could be any and all types.

Let’s take our identity function from earlier:

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

What if we want to also log the length of the argument arg to the console with each call? We might be tempted to write this:

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
  // Property 'length' does not exist on type 'Type'.
  return arg;
}
```
