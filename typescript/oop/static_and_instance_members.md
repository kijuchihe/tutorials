# Static And Instance Members

In object-oriented programming (OOP), `static` and `instance` members are concepts that define how data (properties) and functionalities (methods) are associated with classes and objects.

> Here's a breakdown of static vs. instance members:

## Static Members

- **Static methods**: These are methods defined directly on the class itself. They can be called using the class name followed by dot notation (.) without creating an instance of the class.
- **Static properties**: These are properties defined directly on the class itself. They are shared by all instances of the class and accessed using the class name followed by dot notation.

## Instance Members

- Instance methods: These are methods defined within a class but belong to each instance (object) created from that class. They are called on a specific object instance using dot notation.
- Instance properties: These are properties that define the unique attributes of each object created from a class. They are accessed using dot notation on a specific object instance.

| N          | N                                                    | N                                                              |
| ---------- | ---------------------------------------------------- | -------------------------------------------------------------- |
| Definition | Defined directly on the class                        | Defined within a class but belong to each object instance      |
| Access     | `ClassName.methodName()` or `ClassName.propertyName` | `objectInstance.methodName()` or `objectInstance.propertyName` |
| Creation   | No need to create an object instance                 | Requires creating an object instance                           |
| Sharing    | Shared by all instances of the class                 | Unique to each object instance                                 |
| Use Cases  | Utility functions, class-level operations            | Accessing and modifying object data, specific object behavior  |

```ts
class Car {
  // Static property (shared by all car instances)
  static numberOfCars = 0;

  constructor(model) {
    this.model = model; // Instance property
    Car.numberOfCars++; // Increment static property within constructor
  }

  // Static method
  static getCount() {
    return Car.numberOfCars;
  }

  // Instance method
  startEngine() {
    console.log(this.model + " engine started!");
  }
}

const car1 = new Car("Tesla Model S");
const car2 = new Car("Toyota Camry");

console.log(Car.getCount()); // 2 (static property accessed using class name)
car1.startEngine(); // "Tesla Model S engine started!" (instance method)

console.log(car1.numberOfCars); // Accessing static property through instance (not recommended, use Car.getCount())
```

## In summary

- Static members belong to the class itself, while instance members belong to each object created from the class.
- Static methods are useful for utility functions or class-level operations, while instance methods provide specific functionalities for each object.
- Static properties are shared by all instances, while instance properties define the unique data of each object.
- Effective use of static and instance members promotes code organization, reusability, and clear separation of concerns within your object-oriented programs.

## Uses of Static Methods

Static methods and properties are valuable tools in object-oriented programming (OOP) for defining functionalities and data that belong to the class itself rather than individual objects. Here are some key use cases for static methods and properties:

- **Utility Functions**: Static methods can be used to define utility functions that operate on data of a specific type or perform common tasks related to the class. These functions don't require creating an object instance and can be called directly using the class name.

```ts
class MathHelper {
  static sum(x: number, y: number): number {
    return x + y;
  }

  static square(x: number): number {
    return x * x;
  }
}

console.log(MathHelper.sum(2, 3)); // 5 (static method called directly)
```

- **Class-Level Constants**: Static properties can be used to define constants that are shared by all instances of the class. These constants represent values that are unlikely to change and are relevant to the class as a whole.

```ts
class Car {
  static readonly MAX_SPEED: number = 200; // Shared constant

  constructor(public model: string) {}
}

console.log(Car.MAX_SPEED); // 200 (static property accessed using class name)
```

- **Factory Methods**: Static methods can be used to create objects (often with specific configurations) without explicitly using the new keyword. These factory methods provide a convenient way to manage object creation logic within the class.

```ts
class Point {
  constructor(public x: number, public y: number) {}

  static fromCoordinates(x: number, y: number): Point {
    return new Point(x, y);
  }
}

const point1 = new Point(3, 4);
const point2 = Point.fromCoordinates(5, 6); // Static factory method
```

- **Namespaces**: In some cases, static properties can be used to create basic namespaces within a class. This can help organize related functions or constants under a single class identifier.

```ts
class Utils {
  static string: {
    repeat(str: string, times: number): string;
  };

  static number: {
    factorial(num: number): number;
  };
}

// Usage examples:
console.log(Utils.string.repeat("Hello ", 3)); // "Hello Hello Hello "
console.log(Utils.number.factorial(5)); // 120
```

- **Helper Classes**: Static methods can be used to define helper classes that provide utility functions related to the main class without cluttering the main class itself.

```ts
class Calculator {
  static Math = class {
    static sum(x: number, y: number) {
      return x + y;
    }

    static difference(x: number, y: number) {
      return x - y;
    }
  };

  add(x: number, y: number) {
    return this.constructor.Math.sum(x, y); // Access static method from helper class
  }
}

const calculator = new Calculator();
console.log(calculator.add(10, 5)); // 15
```

- **Mixins (JavaScript/TypeScript)**: In some object-oriented languages like JavaScript (with TypeScript), static methods can be used to create mixins. These are objects that contain reusable functionalities that can be "mixed in" to other classes using inheritance or composition techniques.
