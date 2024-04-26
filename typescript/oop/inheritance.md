# Inheritance in OOP

Inheritance in Object-Oriented Programming (OOP) is a fundamental concept that allows you to create new classes (subclasses) that inherit properties and behaviors from existing classes (parent classes). It's a powerful tool for code reuse, organization, and representing real-world relationships between objects.

## Core Idea

- A subclass inherits the attributes (variables) and methods (functions) of its parent class.
- The subclass can then add its own specific attributes and methods, extending the functionality of the parent class.
- This creates a hierarchical relationship between classes, where a subclass is a more specialized version of its parent class.

## Benefits

- Code Reuse: By inheriting existing functionality, you don't have to rewrite common code for each new class. This saves time and effort.
- Organization: Inheritance helps organize code by grouping related classes together and creating a clear hierarchy.
- Extensibility: Subclasses can easily extend the functionality of parent classes by adding new features without modifying the parent class itself.
- Real-World Relationships: Inheritance can model real-world relationships like "is-a" relationships. For example, a Dog class inherits from an Animal class because a Dog "is-a" type of Animal.

```ts
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent class constructor with arguments
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }
}

const animal1 = new Animal("Animal");
const dog1 = new Dog("Buddy", "Golden Retriever");

animal1.makeSound(); // Generic animal sound
dog1.makeSound(); // Woof!
```

> Here:

- `Animal` is the parent class.
- `Dog` is the subclass that inherits from `Animal`.
- `Dog` inherits the `name` property and `makeSound` method from `Animal`.
- `Dog` also has its own breed property and overrides the `makeSound` method to provide a specific sound for a dog.

## Key Points

- Inheritance creates a parent-child relationship between classes.
- Subclasses inherit public and protected members from the parent class (private members are not inherited).
- Subclasses can override inherited methods to provide their own implementation.
- Inheritance promotes code reusability, organization, and maintainability.
- By effectively using inheritance, you can create well-structured and efficient object-oriented programs.
