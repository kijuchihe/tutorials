# Memory Addresses

```c
int main()
{
    int age = 30;
    double gpa = 3.4;
    char grade = 'A';
}
```

When we store 30 in the age variable, it gets stored on our computer RAM. It
stores it at a specific location on the memory of the computer.

We refer to these values stored in the variables by referring to the names of
the variables. So whenever our C program wants to access these values, it also
refers to a specific memory address where the value is stored in our physical
memory

```c
int main()
{
    int age = 30;
    double gpa = 3.4;
    char grade = 'A';

    printf("%p", &age)
    // 0060ff00
    // When we want to print out this physical memory address of a variable or value, we use %p
    // The %p stands for pointer
}
```
