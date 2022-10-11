# Working with files

```c
int main() {
    // FILE * fpointer = fopen(file_name, file_mode)
    // file_modes:
    // r - read
    // w - write - This will override anything that is in the file already
    // a - append

    FILE * fpointer = fopen("employees.txt", "w");

    fprintf(fpointer, "")
    // The fprintf allows to write in a file

    fclose(fpointer);
}
```

## Appending

```c
int main() {
    FILE * fpointer = fopen("employees.txt", "a");

    fprintf(fpointer, "This is appended data")
    // The fprintf allows to write in a file

    fclose(fpointer);
}
```

## Reading

```c
int main() {
    char line[255];
    FILE * fpointer = fopen("employees.txt", "r");

    // fprintf(fpointer, "")
    // This will generate an error

    // fgets(where_to_store_the_gotten_data, size, file_pointer)
    fgets(line, 255, fpointer) //First line

    fclose(fpointer);
}
```

```c
int main() {
    char line[255];
    FILE * fpointer = fopen("employees.txt", "r");

    // fprintf(fpointer, "")
    // This will generate an error

    // fgets(where_to_store_the_gotten_data, size, file_pointer)
    fgets(line, 255, fpointer) //First line
    fgets(line, 255, fpointer) //Second line
    fgets(line, 255, fpointer) //Third line
    // And so on

    fclose(fpointer);
}
```
