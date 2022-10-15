# Working with numbers

## Binary Numbers

```cpp
int main () {
    int number = 0b11111111;
    // Notice the prefix 0b to tell the compiler that the number is binary
    cout << number;
    // 255
}
```

## Hexadecimal Numbers

```cpp
int main () {
    int number = 0xFF;
    // Notice the prefix 0x to tell the compiler that the number is hexadecimal
    cout << number;
    // 255
}
```

## Unsigned

This prevents a variable from accepting a negative value

```cpp
int main() {
    unsigned int number1 = 1;
    unsigned int number2 = -1;
    cout << number1 << endl << number2;
    // 1
    // 46748982346
    // You'll notice that a random large number is generated: which is not what we want
    return 0;
}
```
