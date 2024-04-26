# Getters and Setters

Getters and setters are accessor properties in TypeScript that allow you to control access to an object's properties. They provide a way to define how a property's value can be retrieved (getter) or modified (setter). Here's how to define them:

## Using Getters

A getter method is defined using the get keyword before the method name.
It doesn't take any arguments but can optionally return a value.
The returned value represents the value you want to expose when the property is accessed.

```ts
class Car {
  private _model: string;

  constructor(model: string) {
    this._model = model;
  }

  get model(): string {
    return this._model;
  }
}

const car = new Car("Tesla Model S");
console.log(car.model); // Outputs "Tesla Model S"
```

## Using Setters

A setter method is defined using the set keyword before the method name.
It takes one argument, typically representing the new value to be assigned to the property.
The setter can optionally perform logic before updating the property's internal value.

```ts
class Car {
  private _model: string;

  constructor(model: string) {
    this._model = model;
  }

  get model(): string {
    return this._model;
  }

  set model(newModel: string) {
    if (newModel.length < 3) {
      console.error("Model name must be at least 3 characters long.");
    } else {
      this._model = newModel;
    }
  }
}

const car = new Car("Tesla Model S");
car.model = "HRV"; // No error (property updated)
car.model = "T"; // Error: "Model name must be at least 3 characters long."
```

## Explanation

In the above example, the \_model property is marked as private using the private keyword. This restricts direct access from outside the class.
The model getter allows retrieving the property's value (this.\_model).
The model setter validates the new model name before assigning it (this.\_model).

## Benefits of Using Getters and Setters

- Data Encapsulation: Getters and setters promote data encapsulation by controlling access to properties and potentially adding validation logic within setters.
- Custom Logic: You can implement custom logic within getters and setters to perform actions before or after accessing or modifying the property's value.
- Flexibility: They provide flexibility in how you want to expose or manipulate properties within your classes.

## Key Points

- Getters and setters enhance code maintainability and readability.
- They are often used in conjunction with access modifiers (public, private, protected) for effective data protection.
- Consider using getters and setters whenever you want to control access or add logic related to property access or modification.

In TypeScript, there's no strict requirement to have the same name for getters and setters related to the same property. However, following the convention of using the same property name with get and set prefixes is generally recommended for better readability and consistency.

Here's a breakdown of the pros and cons of using the same name vs. different names:

Using the Same Name (Recommended):

Readability: It maintains a clear association between the property name and its access methods.
Consistency: It aligns with common practices in TypeScript and other languages with getters and setters.
