# Cpp Variables

A variable is technically a name that we give to a position in the memory (RAM).
Since the value of a variable can change (vary), therefore the name variable

## Defining and Initializing

```cpp
int main() {
    data_type variable_name;
    variable_name = value;
}
```

```cpp
int main() {
    data_type variable_name  = value;
}
```

```cpp
int main() {
    int file_size = 100;
    double sales = 9.99;
    std::cout << file_size;
    return 0;
}
```

### Brace Initializer

This prevents us from making mistakes

```cpp
#include <iostream>

using namespace std;

int main() {
    int number {1.2};
    // This won't compile because we passed in the wrong data type
    return 0;
}
```

```cpp
#include <iostream>

using namespace std;

int main() {
    int number {};
    // Now the value of number will be set to 0
    return 0;
}
```

It's always good to initialize a variable immediately at the definition

## Initializing multiple variables on the same line

You can initialize two or more variables on the same line but it is not advised

```cpp
int main() {
    int file_size = 100, counter = 1;
    double sales = 9.99;
    std::cout << file_size;
    return 0;
}
```

> Notice that you can

```cpp
#include <iostream>

using namespace std;

int main() {
    int file_size = 100, counter = 1;
    double sales = 9.99;
    cout << file_size;
    return 0;
}
```

## Constants

These are values that do not change. For example if we have the value of pi, we
might mistakenly change it. In order to make sure it doesn't change, we use the
`const` keyword

```cpp
#include <iostream>

using namespace std;

int main() {
    const double pi = 3.14;
    pi = 14; // This will give an error
    cout << file_size;
    return 0;
}
```
