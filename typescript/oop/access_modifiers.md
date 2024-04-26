# Access Modifiers

Access modifiers are keywords in object-oriented programming (OOP) languages like TypeScript that control the visibility and accessibility of properties (attributes) and methods (functions) within a class. They play a crucial role in encapsulation, a core principle of OOP that promotes data protection, code organization, and controlled access.

## Types of Access Modifiers

There are typically three main access modifiers in OOP languages:

- Public: Members declared as public are accessible from anywhere in your code, including outside the class itself. They are visible and usable by any part of your program.

- Private: Members declared as private are accessible only within the class where they are defined. They are hidden from outside code, protecting them from unintended modification or access.

- Protected: Members declared as protected are accessible from within the class where they are defined and also from its subclasses. They provide a way to share certain functionalities within a class hierarchy while still restricting access from completely external code.

## Benefits of Using Access Modifiers

- Encapsulation: Access modifiers enforce encapsulation by allowing you to control how data is accessed and manipulated within a class.
- Data Protection: Private members shield sensitive data from accidental or unauthorized modification.
- Code Organization: Access modifiers help organize code by clearly defining which parts are meant for internal use and which are available for external interaction.
- Maintainability: They improve code maintainability by making it clear how different parts of a class interact with each other.

```ts
class Car {
  public model: string; // Public property (accessible from anywhere)
  private _year: number; // Private property (accessible only within the class)

  constructor(model: string, year: number) {
    this.model = model;
    this._year = year;
  }

  public getColor(): string {
    // Public getter method
    return "Unknown"; // Replace with logic to get actual color
  }

  protected setColor(newColor: string) {
    // Protected setter method
    // Implement logic to set color with validation (optional)
  }
}

const car1 = new Car("Tesla Model S", 2024);

console.log(car1.model); // "Tesla Model S" (Public access)

// car1._year is not accessible due to being private

console.log(car1.getColor()); // "Unknown" (Public getter)

// car1.setColor is not directly accessible due to being protected
```

## Private and Protected access identifiers

In TypeScript, both private and protected are access modifiers that control the visibility and accessibility of properties and methods within a class. They play a vital role in achieving encapsulation, a core principle of object-oriented programming (OOP). Here's a breakdown of their key differences:

Private vs. Protected Access Modifiers

| Feature     | Private                                         | Protected                                                      |
| ----------- | ----------------------------------------------- | -------------------------------------------------------------- |
| Scope       | Accessible only within the class where declared | Accessible within the class and its subclasses                 |
| Inheritance | Not inherited by subclasses                     | Inherited by subclasses, but remains hidden                    |
| Usage       | For internal data or methods, data protection   | For shared implementation details between class and subclasses |

### Understanding the Differences

Private: Members declared as private are only accessible within the class where they are defined. They are hidden from outside code, protecting them from unintended modification or access. This is ideal for sensitive data or methods that should only be used internally by the class itself.

```ts
class Car {
  private _year: number;

  constructor(year: number) {
    this._year = year;
  }

  // Public method to get the year (doesn't expose the private property directly)
  public getYear(): number {
    return this._year;
  }
}
```

Protected: Members declared as protected are accessible from within the class where they are defined and also from its subclasses. This allows for sharing certain functionalities within a class hierarchy while still restricting access from completely external code. It's useful for defining core functionalities that subclasses can extend or override.

```ts
class Vehicle {
  protected model: string;

  constructor(model: string) {
    this.model = model;
  }

  public getModel(): string {
    return this.model;
  }
}

class Car extends Vehicle {
  // Access and potentially override the inherited protected property
  constructor(model: string, year: number) {
    super(model); // Call parent class constructor
  }

  public getFullDescription(): string {
    return `This is a ${this.getModel()} car.`; // Access inherited protected property
  }
}
```

### Choosing Between Private and Protected

Use private for data or methods that should only be used within the class and should not be exposed or modified externally.
Use protected for functionalities that are meant to be shared as a foundation for subclasses but should remain hidden from completely external code.
In essence:

- `private` offers stricter data protection within a class.
- `protected` promotes code reusability and controlled sharing within a class hierarchy.
