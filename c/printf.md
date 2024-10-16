# Printf function

## Format specifiers

- "%d" - For printing out a number
- "%s" - For a string
- "%c" - For printing a single character
- "%f" - For printing doubles or deimals

```c
printf("My favourite %s is %d", "number", 500)
```

Notice that the order matters

```c
printf("%f", 8.9)
// Output: 8.900000
// Notice that the value was printed to a specific decimal point
```

```c
printf("%f", 4.9 + 4.0)
// Output: 8.900000
// Notice that the math was done
```

```c
printf("%f", 4.9 - 4.0)
// Output: 8.900000
// Notice that the math was done
```

```c
printf("%f", 4.9 / 4.0)
// Output: 8.900000
// Notice that the math was done
```

```c
printf("%f", 4.9 * 4.0)
// Output: 8.900000
// Notice that the math was done
```

```c
printf("%f", 5 + 4)
// Error
printf("%d", 5 / 4)
1 // Notice that an integer was returned
printf("%f", 5+4.0)
// 9.000000
printf("%f", 5 / 4.0)
1.250000
```

```c
printf("I got 100%%")
// I got 100%
```
