# 2D Arrays

These are arrays that have arrays as their children

```c
int main() {
    int nums[][] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
    // nums[0][0] = 1
    // nums
    return 0;
}
```

```c
int main() {
    int nums[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
    // nums[0][0] = 1
    // nums
    return 0;
}
```

```c
int main() {
    int nums[3][2];
    nums[0][0] = 1
    return 0;
}
```

```c
int main() {
    int nums[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
    // nums[0][0] = 1
    // nums
    return 0;

    int i, j;
    for (i=0; i < 3; i++) {
        for (j=0; j < 3; j++) {
            printf("%d,", nums[i][j]);
        }
        printf("\n")
    }
}
```

```c

```
