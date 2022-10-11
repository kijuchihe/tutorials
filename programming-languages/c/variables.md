# Variables

A container for storing data

```c
#import <stdio.h>
```

```c
int main() {
    printf("There once was a man named John \n");
    printf("He was 35 years old.\n");
    printf("He really liked the name John\n")
    printf("but did not like being 35.\n")
}
```

We have to specify the type of data we want store in our variables

```c
varType varName = varValue;
```

```c
char characterName[] = "John";
int characterAge = 35;
```

```c
#import <stdio.h>

int main() {
    char characterName[] = "John";
    int characterAge = 35;
    printf("There once was a man named %s \n", characterName);
    // The %s is like a placeholder which tells c that it will be replaced with a string value
    // This value is then passed in after the comma
    printf("He was %d years old.\n", characterAge);
    printf("He really liked the name %s \n", characterName)
    printf("but did not like being %d.\n")
}
```

### Variables can be modified

```c
#import <stdio.h>

int main() {
    char characterName[] = "John";
    int characterAge = 35;
    printf("There once was a man named %s \n", characterName);
    // The %s is like a placeholder which tells c that it will be replaced with a string value
    // This value is then passed in after the comma
    printf("He was %d years old.\n", characterAge);
    characterAge = 30;
    printf("He really liked the name John\n")
    printf("but did not like being 35.\n")
}
```
