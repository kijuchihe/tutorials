# Composition and Aggregation

This has the 'has-a' relationship

In object-oriented programming, composition refers to the practice of building complex objects by combining similar ones. It involves creating classes that contain references to other classes as members, thus forming a relationship where the containing class is composed of one or more instances of other classes. This allows for creating more modular, reusable and flexible code compared to inheritance, as it promotes encapsulation and reduces tight coupling between classes.

## To learn

ECMA module

```ts
class Car {
  private name: string;

  constructor() {}
  set name(val: string) {
    this.name = val;
  }
}

const car = new Car();
```
