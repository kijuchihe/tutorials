# Data Types

## Integers

keyword - int

- They usually take 4bytes of memory on the system but can change depending on
  the implementation.
- In 4 bytes, we can store numbers ranging from - 2Billion to 2 Billion

## Short

keyword - short

- If you want to store a smaller number and you don't need it to take 4bytes of
  space, we can use the short
- It typically takes 2 bytes of memory
- It can store numbers between -32,768 and 32,767

## Long

- Usually the same as integers on most systems

```cpp
int main() {
    long fileSize = 90000L;
}
```

## Long Long

- This takes 8 bytes

## Double

- Takes 8 bytes of memory
- -1.7E308 to 1.7E308

## Float

- Takes 4 bytes of memory
- -3.4E38 to 3.4E38

```cpp
int main() {
    float interestRate = 3.67F;
    // float interestRate = 3.67f;
    // The F is added to tell the compiler that it is a float and not a double
    // If treated as a double, it could result in data loss
}
```

## Long double

- Takes 8 bytes of memory
- -3.4E932 to 1.7E4832

## Booleans

keyword - bool

```cpp
bool isValid = false;
bool isTrue = true;
```

## Characters

keyword - char

```cpp
char letter = 'a'
// Notice that we use single quotes for characters
```

## Auto

```cpp
auto isValid = true;
// The type will be inferred;
```
