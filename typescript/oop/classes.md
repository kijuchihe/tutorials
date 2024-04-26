# Classes

In Object-Oriented Programming (OOP), a class is a blueprint or template that defines the properties (attributes) and behaviors (methods) of objects. It serves as a central concept for creating objects that share similar characteristics and functionalities.

Here's a breakdown of what a class is and its role in OOP:

## Key Characteristics

- Blueprint: A class defines the structure and functionalities for objects of that type. It acts as a reusable plan for creating objects.
- Properties: A class defines the attributes (variables) that objects of that type will possess. These attributes represent the data or state of the object.
- Behaviors: A class defines the methods (functions) that objects of that type can perform. These methods represent the actions or functionalities that the object can execute.
- Encapsulation: Classes promote encapsulation, which is the bundling of data (properties) and the methods that operate on that data together within a single unit. This helps control access and maintain data integrity.

## Benefits of Using Classes

- Code Reusability: By defining a class, you can create multiple objects of that type without rewriting the code for each object. This saves development time and effort.
- Object Organization: Classes help organize code by grouping related properties and behaviors together. This makes code easier to understand, maintain, and modify.
- Data Abstraction: Classes provide data abstraction by hiding the internal implementation details of properties and methods. This allows you to interact with objects through their public methods without worrying about the underlying code.
- Real-World Modeling: Classes can be used to model real-world entities and their relationships. This can make your code more intuitive and easier to reason about.

```ts
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  accelerate() {
    console.log("Car is accelerating!");
  }

  brake() {
    console.log("Car is braking!");
  }
}

// Car object is an instance of the class
const car1 = new Car("Tesla Model S", "Red");
const car2 = new Car("Toyota Camry", "Blue");

car1.accelerate(); // Car is accelerating!
car2.brake(); // Car is braking!
```
