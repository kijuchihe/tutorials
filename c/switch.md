# Switch Statement

This is a special type of conditional statement that allows us to compare a
specific value to other values

```c
int main () {
    char grade = 'A';
    // The item passed into the grade is the item we want to compare with other values
    switch (grade) {
        case 'A':
            printf("You did great");
            break;
        case 'B':
            printf("You did alright");
            break;
        case 'C':
            printf("You did poorly");
            break;
        case 'D':
            printf("You did bad");
            break;
        case 'F':
            printf("You did very bad and failed");
            break;
        default:
            // This is like an else statement
            printf("Invalid Grade");
            break;
    }

    return 0;
}
```

The break statement tells to stop once the value has been found or the case has
been met
