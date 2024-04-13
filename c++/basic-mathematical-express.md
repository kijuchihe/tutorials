# Mathematical Expressions

## Addition

```cpp
#include <iostream>

using namespace std;
int main() {
    int x = 10;
    int y = 3;
    int z = x + y;
    cout << z

}
```

## Division

```cpp
#include <iostream>

using namespace std;
int main() {
    int x = 10;
    int y = 3;
    int z = x / y;
    // 3
    cout << z
}
```

You'll notice that running the above code will return an integer (`3`) instead
of a decimal (3.333333). Even if we change the value of z, it will not change
the answer. This is because, the values used in the calculations are both
integers. If we however change one to float (or double), then our value will
change

```cpp
#include <iostream>

using namespace std;
int main() {
    double x = 10.0;
    int y = 3;
    int z = x / y;
    // 3
    cout << z
}
```

## Modulus

The modulus returns the remainder of a division

```cpp
#include <iostream>

using namespace std;
int main() {
    double x = 10.0;
    int y = 3;
    int z = x % y;
    cout << z;
    // 1

}
```

## Changing variables with operators

```cpp
int main() {
    int x = 10;
    x = x + 1; // Now, x = 11
    x = 10;
    x = x - 1; // Now, x = 9
    x = x * 2; // Now, x = 18

}
```

### Incrementing and Decrementing

```cpp
int main() {
    int x = 10;
    x++ // Now, x = 11
    x = 10;
    x--; // Now, x = 9
}
```

There is no multiplication or division form for this increment and decrement

> Note the following

```cpp
int main () {
    int x = 10;
    int y = x++;
    std::cout << x; // x = 11
    std::cout << y; // y = 10
}
```

```cpp
int main () {
    int x = 10;
    int z = ++x;
    std::cout << x; // x = 11
    std::cout << z; // z = 11
}
```
