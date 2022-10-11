# Arrays

This is like a container where you can store data. Maybe storing different names
of people. There is no limit to the amount of data that can be passed.

An array allows us to store many values

```c
int main()
{
    // Syntax
    // dataType variableName[] = {}
    // int luckyNumbers[] = {}
    int luckyNumbers[] = {1, 3, 2, 7, 6, 9}
    // Each item in the array is called an element

    // printf("%d", luckyNumbers[index])
    printf("%d", luckyNumbers[0])
}
```

You'll notice that indexing starts with 0

```c
int main()
{
    int luckyNumbers[] = {1, 3, 2, 7, 6, 9}
    luckyNumbers[3] = 27;
    // Now 2 will change to 27
    printf("%d", luckyNumbers[3]);
    // 27
}
```

## Defining arrays without any data

```c
int main()
{
    // int numbers[numberOfElementsTheArrayCanHold];
    int numbers[];
    numbers[1] = 80
    printf("%d", numbers[1]);
    // Output: 80
    return 0;
}
```

```c
int main()
{
    // int numbers[numberOfElementsTheArrayCanHold];
    int numbers[];
    numbers[1] = 80
    printf("%d", numbers[0]);
    // Output: -2
    // The output of -2 simply means not found
    return 0;
}
```

## Strings

You'll notice that the strings almost have the same syntax as arrays. It's
basically an array

```c
int main()
{
    // int numbers[numberOfElementsTheArrayCanHold];
    char phrase[20] = "Array";
    // numbers[1] = 80;
    printf("%d", numbers[0]);
    // Output: -2
    // The output of -2 simply means not found
    return 0;
}
```
