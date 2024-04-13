# Introduction to C++

## First Program

> You can create a main.cpp

```cpp
#include <iostream>
// iostream is short for input output stream which comes from the standard library

int main() {
    std::cout << "Hello world";
    return 0;
}
```

> The main function is the entry point to of the program.
>
> The int is the return type of the function which means the data type that will
> be returned by the function
>
> Anything in the braces will be executed when the function is called
>
> `std` represents the standard library
>
> **Note**: You should note that cout character out and not console out
>
> You'll also notice that two angle brackets are used. That is like the
> container which contains the text to be printed
