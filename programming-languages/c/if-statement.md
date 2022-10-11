# If statement

## Basic Usage

```c
int max(int num1, int num2) {
    int result;
    if (num1 > num2) {
        result =  num1;
    } else {
        result = num2;
    }
    return result
}

int main () {
    printf("%d", max(4, 10))
}
```

### having 3 numbers

```c
int max(int num1, int num2, int num3) {
    int result;
    if (num1 >= num2 && num1 >= num3) {
        result =  num1;
    } else if (num2 >= num1 && num2 >= num3) {
        result = num2;
    } else {
        result = num3;
    }
    return result
}

int main () {
    printf("%d", max(4, 10, 15))
}
```

## Some Logical Operators

- AND -> &&
  - All of the conditions has to be true
- OR -> ||
  - Only one of the conditions has to be true

## Math/Comparison Operators/signs

- `<`
- `>`
- `<=`
- `>=`
- `==`
- `!=`
- `!`:
  - This negates the whole operation. If it's false, it becomes true and if it's
    true, it becomes false
