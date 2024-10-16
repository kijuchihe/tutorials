# Input and Output

## printf

```c
int main() {
    printf("Hello World");
}
```

## scanf

```c
int main() {
    int x;
    printf("Enter a number: ");
    scanf("%d", &x);
    printf("You entered %d", x);
}
```

## Special String Characters

- `\n`: New line
- `\t`: Tab
- `\r`: Carriage return
- `\b`: Backspace
- `\a`: Alert (beep)
- `\v`: Vertical tab
- `\f`: Form feed
- `\0`: Null character

## Format Specifiers

- `%d`: Decimal integer
- `%i`: Integer (signed)
- `%f`: Floating-point number
- `%c`: Character
- `%s`: String
- `%lf`: Long floating-point number
- `%p`: Pointer
- `%x`: Hexadecimal integer
- `%o`: Octal integer
- `%e`: Exponential notation
- `%g`: General floating-point notation
- `%a`: Hexadecimal floating-point notation
- `%A`: Hexadecimal floating-point notation
- `%u`: Unsigned integer
- `%lu`: Long unsigned integer
- `%llu`: Long long unsigned integer
- `%hd`: Short integer
- `%ld`: Long integer
- `%lld`: Long long integer
- `%Lf`: Long double
- `%Lg`: Long double general floating-point notation
- `%La`: Long double hexadecimal floating-point notation
- `%LA`: Long double hexadecimal floating-point notation
- `%n`: Number of characters written
- `%m.pX`: X in m characters, with p digits after the decimal point
- `%m.pE`: E in m characters, with p digits after the decimal point
- `%m.pG`: G in m characters, with p digits after the decimal point
- `%m.pA`: A in m characters, with p digits after the decimal point
- `%m.pB`: B in m characters, with p digits after the decimal point


## Examples

```c
int main() {
    int x = 10;
    printf("The number is %d", x);
}
```
