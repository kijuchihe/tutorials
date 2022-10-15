# Inputting data from the console

We can get data from the console using the `cin` provided by the standard
library

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Enter a value: ";
    int value;
    cin >> value;
    cout << value;
    // Enter a value: 10
    // 10
}
```

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Enter a value: ";
    int value;
    cin >> value;
    cout << value;
    // Enter a value: 10.3
    // 10
}
```

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Enter a value: ";
    double value;
    cin >> value;
    cout << value;
    // Enter a value: 10.5
    // 10.5
}
```

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Enter values for x and y: ";
    double x;
    double y;
    cin >> x;
    cin >> y;
    cout << "Output " << x + y;
    return 0;
    // Enter values for x and y: 10
    // 20
    // Output 30
}
```

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Enter values for x and y: ";
    double x;
    double y;
    cin >> x;
    cin >> y;
    cout << "Output " << x + y;
    return 0;
    // Enter values for x and y: 10 20
    // Output 30
    // Notice that we separated the values with a space and it worked
}
```

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Enter values for x and y: ";
    double x;
    double y;
    cin >> x >> y;
    // Notice that we chained the values
    cout << "Output " << x + y;
    return 0;
}
```
