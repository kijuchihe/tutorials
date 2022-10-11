# Pointers in C

A pointer is basically a memory address that you can work with

```c
int main()
{
    int age = 30;

    printf("age's memory address: %p\n", &age)
    // Recall that the ampersand plus a variable name returns the pointer (memory address) of a variable
}
```

## creating a pointer variable

```c
int main()
{
    int age = 30;
    int * pAge = &age;

    // When creating a pointer, you actually store the memory address of another variable that is already created

    printf("age's memory address: %p\n", &age)
    // Recall that the ampersand plus a variable name returns the pointer (memory address) of a variable
}
```

## Naming

```c
int main()
{
    int age = 30;
    int * pAge = &age; //Notice I use the data type of the variable's memory we are storing
    double gpa = 3.4;
    double * pGpa = &gpa;
    char grade = 'A';
    char * pGrade = &grade;

    printf("age's memory address: %p\n", pAge)
    // Recall that the ampersand plus a variable name returns the pointer (memory address) of a variable
}
```

## Dereferencing a pointer

Dereferencing a pointer means going to the memory address and getting the value
from there

```c
int main()
{
    int age = 30;
    int * pAge = &age; //Notice I use the data type of the variable's memory we are storing

    printf("%p\n", pAge)
    // Hex Value
}
```

When you dereference a pointer, it will return the data that is stored in that
address

```c
int main()
{
    int age = 30;
    int * pAge = &age; //Notice I use the data type of the variable's memory we are storing

    printf("%d\n", *&age)
    // 30
    printf("%p\n", &*&age)
    //
}
```
