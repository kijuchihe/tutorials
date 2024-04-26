# Encapsulation

In object-oriented programming (OOP), encapsulation refers to the practice of bundling data (properties) and the methods (functions) that operate on that data together within a single unit, typically a class. It's a cornerstone concept of OOP that promotes data protection, code organization, and controlled access.

Here's a breakdown of encapsulation:

## Why Encapsulation?

- Data Protection: Encapsulation helps protect data from unintended modification or access. By controlling access to properties within a class, you can ensure that data integrity is maintained and unexpected changes don't occur.
- Code Organization: Encapsulation keeps related data and methods together, making code easier to understand, maintain, and modify. You don't need to search for scattered code snippets to understand how an object works.
- Controlled Access: You can define access levels (public, private, protected) for properties and methods within a class. This allows you to control which parts of the object's data and functionality can be accessed from outside the class.

## How Does Encapsulation Work?

- Classes: Classes serve as the primary encapsulation unit. They define the properties and methods that belong to an object.
  Access Levels: Access levels (public, private, protected) determine how properties and methods within a class can be accessed:
- Public: Accessible from anywhere in your program.
- Private: Accessible only within the class itself.
- Protected: Accessible within the class and its subclasses.
- Getters and Setters: In some languages, you can use getter and setter methods to provide controlled access to private properties. Getters allow retrieving data, while setters allow modifying it under certain conditions.

## Benefits of Encapsulation

- Improved Code Maintainability: Code becomes easier to understand, modify, and reuse.
- Reduced Errors: Unintended data modification is minimized by controlling access.
- Flexibility: You can change the internal implementation details of a class without affecting how it's used externally, as long as the public interface (methods) remains consistent.

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

// In a subclass (assuming it exists):
class ElectricCar extends Car {
  constructor(model: string, year: number) {
    super(model, year);
  }

  public override setColor(newColor: string) {
    // Override protected method
    if (newColor === "black" || newColor === "white" || newColor === "silver") {
      super.setColor(newColor); // Call parent class protected method
    } else {
      console.error("Invalid color for electric car!");
    }
  }
}
```

- The `Car` class defines:
- A `public` property `model`.
- A `private` property `_year`.
- A `public` `getter method` `getColor` to access color (replace with actual logic).
- A `protected` `setter` method setColor to set color (implement validation logic here if needed).
- Only the `model` property is directly accessible from outside the class.
- The `getColor` method provides controlled access to potentially private data.
- The `setColor` method is protected, allowing subclasses to potentially implement validation or specific color logic while remaining hidden from external code.
