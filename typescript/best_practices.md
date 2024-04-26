# Best Typescript Practices

## Using unknown instead of any and type-guards

any type: This removes types check from that particular variable. It is a bad thing to do and try avoiding any

unknown type: Tells typescript that you don't know the current type but later on will change the type later on when maybe the data is fetched or when that particular variable is being used

```ts
interface IUser {
  name: string;
}

interface IAdminUser extends IUser {
  token: string;
  addNewUser: () => void;
}

function isAdminUser(object: unknown): object is IAdminUser {
  if (object !== null && typeof object === "object") {
    return "token" in object;
  }
  return false;
}

const goodUser: unknown = await response.json();

if (isAdminUser(goodUser)) {
  goodUser.token;
  // There is going to be type inference
}
```

## Using the "is" and "implements" keywords

```ts
type Species = "cat" | "dog";

interface Pet {
  species: Species;
}

class Cat implements Pet {
  public species: Species = "cat";
  public meow(): void {
    console.log("Meow");
  }
}

// Correct way
function petIsCat(pet: Pet): pet is Cat {
  return pet.species === "cat";
}

// Bad way
function petIsCatBoolean(pet: Pet): boolean {
  return pet.species === "cat";
}

const p: Pet = new Cat();

if (petIsCatBoolean(p)) {
  p.meow(); // meow does not exist on type Pet
  (p as Cat).meow();
  // Type casting to override the above error when you are sure it is a cat
  // What if we have many methods we want to use, do we then repeat the casting
}

if (petIsCat(p)) {
  p.meow(); // This works fine
}
```

## Using the satisfies keyword

```ts
interface ICustomImage {
  data: string;
  width: number;
  height: number;
}

type UserImage = string | ICustomImage;
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: UserImage;
}

const badUser: IUser = {
  id: 1,
  firstName: "string",
  lastName: "string",
  image: "UserImage",
};

// In the above object, badUser has an image that is a string
// However, if we try to access the image, we don't get string properties in the inference. We only get properties or methods common to both
badUser.image;

const goodUser = {
  id: 1,
  firstName: "string",
  lastName: "string",
  image: "UserImage",
} satisfies IUser;
```

## Using enums properly

```ts
enum BadState {
  InProgress,
  Success,
  Fail,
}

BadState.InProgress; //(enum member) State.InProgress = 0

const badStateCheck = (state: BadState) => {};
badStateCheck(100); // 100 is going to be a valid enum value even though the enums are supposed to be 0, 1, 2.

// To fix this,
type GoodState = "In Progress" | "Success" | "Fail";
enum GoodState2 {
  InProgress = "InProgress",
  Success = "Success",
  Fail = "Fail",
}
```

## Using built in utility types

Partial - Makes all fields not required
Omit - Omit a single value from the interface
Record

## Using Advanced Types

```ts
interface IUser {
  name: "Kingsley";
}
```
