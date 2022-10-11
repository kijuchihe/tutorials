# While Loop

This is a loop that runs

```c
int main() {
    int index = 1
    // while (condition) {asLongAsCondition is true}
    while (index <= 5>) {
        printf("%d\n",index);
        index ++;
        // index = index + 1;
    }
}
```

## Do while

This while

```c
int main() {
    int index = 1
    // while (condition) {asLongAsCondition is true}
    do {
        printf("%d\n",index);
        index ++;
        // index = index + 1;
    } while (index <= 5>)
}
```

```c
int main() {
    int secretNumber = 5;
    int guess;
    int guessCount = 0;
    int guessLimit = 3;
    int outOfGuesses = 0;
    // while (condition) {asLongAsCondition is true}
    while (guess != secretNumber && outOfGuesses = 0) {
        if (guessCount < guessLimit) {
            printf("Enter a number:")
            scanf("%d", &guess)
            guessCount++
        } else {
            outOfGuesses = 1;
        }
    }
    if (outOfGuesses == 1) {
        printf("You Lost")
    } else {
        printf("You win!")
    }
}
```
