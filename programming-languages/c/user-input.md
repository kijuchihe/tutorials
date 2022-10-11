# Getting info from the user

```c

int main()
{
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    // Notice how we
    printf("You are %d years old", age)
}
```

> Getting a double

```c
int main()
{
    double gpa;
    printf("Enter your gpa: ");
    scanf("%lf", &gpa);
    // Notice how we
    printf("You are %f", gpa)
}
```

Getting a character

```c
int main()
{
    char grade;
    printf("Enter your grade: ");
    scanf("%c", &grade);
    // Notice how we
    printf("Your grade is %c", grade)
}
```

> Getting a string

```c
int main()
{
    char name[20];
    // You know we've passed in a maximum value
    printf("Enter your name: ");
    scanf("%s", name);
    // Notice we didn't put an amper sign
    // When you run this, we can't pass in multiple words
    // Notice how we
    printf("Your name is %s", grade)
}
```

```c
int main()
{
    char name[20];
    // You know we've passed in a maximum value
    printf("Enter your name: ");
    fgets(name);
    fgets(nameOfVariableWhereStored, maximumNumberOfCharacters, stdin);
    // Notice we didn't put an amper sign
    // Notice how we
    printf("Your name is %s", namr)
}
```

> The below example will show that c is strict about the data type and the
> length of the data and the number of data that is going to be passed in

```c
int main()
{
    char firstName[20];
    char lastName[20];
    printf("Enter your name: ");
    scanf("%s%s", &firstName, &lastName);
    printf("Your name is %s%s",  firstName, lastName)
}
```
