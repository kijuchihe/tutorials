# Implements keyword

## Instantiation and extends keyword.

When using the extends keywords, it takes all the properties and methods of the parent class

```ts
class Vehicle {
  price = 2000;
  color = "red";
  milage = 0;

  drive() {}

  brake() {}
}

class Motorbike extends Vehicle {}

const myMotorbike = new Motorbike();
```

## Implements

Implements tells us that it doesn't inherit values from the parent class but it copies the structure. Since it is just copying the structure, the properties and methods of the class have to be defined.

```ts
class Vehicle {
  price = 2000;
  color = "red";
  milage = 0;

  drive() {}

  brake() {}
}

class Motorbike implements Vehicle {
  // There will be an error saying the properties in vehicle are not defined
}

const myMotorbike = new Motorbike(); // This is going to give an error
```

```ts
class Vehicle {
  price = 2000;
  color = "red";
  milage = 0;

  drive() {}

  brake() {}
}

interface Design {
  length: number;
  seats: number;
}

// You can also implement multiple interfaces/classes
class Motorbike implements Vehicle, Design {}

const myMotorbike = new Motorbike(); // This is going to give an error
```
