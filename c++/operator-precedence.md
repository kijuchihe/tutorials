# Operators have precedence

- Parentheses ()
- Division and Multiplication have the same precedence and have more precedence
  than addition and subtraction
- addition and subtraction have the same precedence

> **Note:** It should be noted that c++ executes code from left to right. So
> even though two items may have the same precedence, the order matters

```cpp
int main() {
    double x = 10;
    int y = 5;
    double z = (x+10)/(3*y);
    std::cout << z;
    return 0;
}
```
