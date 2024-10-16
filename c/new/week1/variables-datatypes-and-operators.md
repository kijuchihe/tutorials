# Variables, Data Types, and Operators

## Variables

Variables are used to store values in a program. They are used to store data in memory.

```c
int main() {
    int age = 20;
    printf("Age: %d", age);
    return 0;
}
```

## Data Types

Data types are used to specify the type of data that a variable can store.

### Basic Data Types

- `int`: Integer // 4 bytes
- `long`: Long integer // 8 bytes
- `short`: Short integer // 2 bytes
- `float`: Floating-point number // 4 bytes
- `char`: Character // 1 byte
- `double`: Double-precision floating-point number // 8 bytes
- `void`: No type

### Derived Data Types

- `array`: Collection of elements of the same type
- `pointer`: Variable that stores the memory address of another variable
- `function`: Block of code that performs a specific task

## Operators

Operators are used to perform operations on variables and values.

### Arithmetic Operators

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division
- `%`: Modulus
- `++`: Increment
- `--`: Decrement

### Assignment Operators

- `=`: Assignment
- `+=`: Add and assign
- `-=`: Subtract and assign
- `*=`: Multiply and assign
- `/=`: Divide and assign
- `%=`: Modulus and assign

### Comparison Operators

- `==`: Equal to
- `!=`: Not equal to
- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to

### Logical Operators

- `&&`: Logical AND (used to check if two conditions are true)
- `||`: Logical OR (used to check if at least one condition is true)
- `!`: Logical NOT (used to reverse the result of a condition)

#### Examples

```c
int main() {
    int x = 10;
    int y = 20;
    if (x > 5 && y < 30) {
        printf("Both conditions are true");
    }
}
```

### Bitwise Operators

- `&`: Bitwise AND (used to check if a bit is set)
- `|`: Bitwise OR (used to set a bit)
- `~`: Bitwise NOT (used to flip bits)
- `^`: Bitwise XOR (used to flip bits)
- `<<`: Left shift (used to multiply by 2)
- `>>`: Right shift (used to divide by 2)

### Miscellaneous Operators

- `sizeof`: Returns the size of a variable (in bytes)
- `?:`: Ternary operator (used to replace an if-else statement)
- `,`: Comma operator (used to separate multiple expressions)
