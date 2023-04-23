# Functions

```sh
function functionName()
{
    echo "This is a function"
}

functionName #Here you are calling the function
```

```sh
function functionName()
{
    echo $1
}

functionName Hi
#Here you are calling the function with the argument Hi
```

```sh
function functionName()
{
    echo $1 $2 $3 $4
}

functionName Hi this is Kingsley
#Here you are calling the function with 4 arguments
```

```sh
function functionName()
{
    returningValue="Using function right now"
    echo "$returningValue"
}

functionName
```

> Notice how a function value can affect a global value

```sh
function functionName()
{
    returningValue="Using function right now"
}

returningValue="I love MAC"
echo $returningValu

functionName
echo $returningValue # Here returning value has been changed by the function
```
