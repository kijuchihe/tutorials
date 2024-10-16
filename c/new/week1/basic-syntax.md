# Basic Syntax of C

C is a powerful and widely-used programming language known for its efficiency and low-level control. Understanding its basic syntax is crucial for writing effective C programs. Let's explore the fundamental elements of C syntax.

## Program Structure

A typical C program consists of the following parts:

1. Preprocessor directives
2. Function declarations
3. Global variables
4. Main function
5. Other functions

Here's a simple example:

```c
#include <stdio.h> // Preprocessor directive

void display() // Declaring the function to tell the compiler about it

// Global variable
int globalVar = 10;

int main() {
    // Local variable
    int localVar = 20;
    display();
    return 0;
}

// Defining the function
void display() {
    printf("Global variable: %d\n", globalVar);
}
```



