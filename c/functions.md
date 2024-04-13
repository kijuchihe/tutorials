# Functions

A function is collection of code that performs a specific task. After a function
is defined, the function can be called when you want the code in the function to
be used

```c
int main() {
    return 0;
}
```

That is a main function

## How

When creating a function, we have to specify the return type of the function.
i.e. the data type that will be returned by the function

```c
returnType functionName() {
    // code for the function
}
```

```c
void sayHi() {
    printf("Hello User");
}
```

To then execute, we have to call the function

```c
int main()
{
    sayHi();
    return 0;
}
```

Note that code executes line after the other

## Parameters in functions

```c
void sayHi(char name[]) {
    printf("Hello %s", name)
}
```

```c
int main()
{
    sayHi("Kingsley");
    // You have to pass in the parameter
    return 0;
}
```

## Multiple Parameters

```c
void sayHi(char name[], int age) {
    printf("Hello %s", name)
}
```

```c
int main()
{
    sayHi("Kingsley");
    // You have to pass in the parameter
    return 0;
}
```

## The return statement

This allows us to return data back from a function. It also breaks us out of the
function

```c
double cube(double num) {
    double result num * num * num;
    return result;
}
int main() {
    printf("Answer: %f", cube(7.0))
}
```

Note that anything after the return keyword will never be executed

## Prototypes

You'll notice that the function has to be defined before the main function; if
not the value can't be called. In cases where you'll like to be able to call the
function before its definition, you'll have to create a prototype

```c
double cube(double num);

int main() {
    printf("Answer: %f", cube(7.0))
}
double cube(double num) {
    double result num * num * num;
    return result;
}
```
