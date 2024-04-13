# Constants

These are values that can't be modified

```c
int main()
{
    int num = 5;
    print("%d\n", num);
    num = 8;
    print("%d\n", num);

    return 0
}
```

```c
int main()
{
    const int num = 5;
    print("%d\n", num);
    num = 8; // An error will occur here since a constant can't be modified
    print("%d\n", num);

    return 0
}
```

And a common practice is to use uppercase

```c
int main()
{
    const int FAV_NUM = 5;
    print("%d\n", FAV_NUM);
    FAV_NUM = 8; // An error will occur here since a constant can't be modified
    print("%d\n", FAV_NUM);

    return 0
}
```

> Other constants

```c
int main()
{
    print("%d\n", 10);
    print("Hello");

    // The above are considered as constants as they're just there and don't really change

    return 0
}
```
