# Writing to the console

```cpp
#include <iostream>

int main() {
    int x = 10;
    std::cout << "x = "
    std::cout << x
    // Output: x = 10
    // std is the standard library
    // cout is the object which represents the standard output stream
    // A stream represents a sequence of characters
    // standard output is our console
    // Using cout, we can write a sequence of characters on our standard output
    // << The double left angle brackets refer to the stream insertion operator
    // They are used to insert to our output stream
}
```

```cpp
#include <iostream>

int main() {
    int x = 10;
    std::cout << "x = " << x;
    // Output: x = 10
}
```

```cpp
#include <iostream>

int main() {
    int x = 10;
    int y = 20;
    std::cout << "x = " << x;
    std::cout << "y = " << y;
    // Output: x = 10y=20
}
```

We might want the y to be on a new line. To do this, we will take the `endl`
object - which refers to the end of the line - from the `std` library

```cpp
#include <iostream>

int main() {
    int x = 10;
    int y = 20;
    std::cout << "x = " << x << std::endl;
    std::cout << "y = " << y;
    // Output: x = 10
    //         y = 20
}
```

The above code can further be simplified still

```cpp
#include <iostream>

int main() {
    int x = 10;
    int y = 20;
    std::cout << "x = " << x << std::endl
              << "y = " << y;
    // Output: x = 10
    //         y = 20
}
```

You'll notice that there's a repetition of the std word. To remove that
repetition, we can add the line

```cpp
#include <iostream>

using namespace std;
// We use the `using` directive to pickup the std namespace
// This will allow std to be defined globally

int main() {
    int x = 10;
    int y = 20;
    cout << "x = " << x << endl
         << "y = " << y;
    // Output: x = 10
    //         y = 20
}
```
