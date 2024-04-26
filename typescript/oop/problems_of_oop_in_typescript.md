# Problems with doing OOP in JS/TS

## Bracket Notation Accessing Private Properties

In JavaScript (and most languages that support access modifiers), bracket notation allows you to access properties on an object regardless of their access modifier (public, private, or protected). This might seem to contradict the concept of encapsulation and data protection using private members.

Here's why it works this way and how to achieve true data privacy:

### Why Bracket Notation Bypasses Access Modifiers

- Dynamic Property Access: Bracket notation `(object[propertyName])` is designed for dynamic property access. It evaluates the property name within the brackets at runtime, allowing you to access properties using variables or expressions. This flexibility comes at the cost of potentially bypassing access modifiers.

### How to Achieve True Data Privacy

While bracket notation can't be entirely restricted, there are ways to achieve better data privacy and discourage unintended access:

1. Convention and Naming: Use a consistent naming convention (like starting private property names with an underscore `_`) to signal their intended privacy within your codebase. This discourages developers from relying on bracket notation to access them directly.
2. Getter and Setter Methods: For truly sensitive data, define public getter methods to retrieve the value of private properties in a controlled way. You can implement validation or logic within these methods to ensure data integrity.

```ts
class Car {
  #year; // Private property using convention (not enforced by JavaScript)

  constructor(model, year) {
    this.model = model;
    this.#year = year;
  }

  getYear() {
    // Public getter method for controlled access
    return this.#year;
  }
}

const car1 = new Car("Tesla Model S", 2024);

// Direct access with bracket notation (not recommended):
console.log(car1["#year"]); // Might still work (depends on implementation)

// Recommended access through public getter:
console.log(car1.getYear()); // Safe and controlled access
```

### In essence

Bracket notation provides flexibility but can undermine access modifiers.
Use conventions, getter/setter methods, and a focus on secure coding practices to achieve better data privacy within your objects.
