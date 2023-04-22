# Conditional Statements

- -eq => Equal to
- -ne => Not equal to
- gt => Greater than
- -lt => Less than
- -le => less than or equal to

## If statements

```sh
#! /bin/bash

count=10

if [ $count -eq 10]
then
        echo "The condition is true"
fi
```

## Else Block

```sh

#! /bin/bash

count=10

if [ $count -eq 8]
then
        echo "The condition is true"
else
        echo "This condition is false"
fi
```

Using brackets

```sh

#! /bin/bash

count=10

if (( $count > 8))
then
        echo "The condition is true"
else
        echo "This condition is false"
fi
```

## Else if

```sh

#! /bin/bash

count=10

if [ $count -eq 8]
then
        echo "The condition is true"
elif (( $count <= 9))
then
        echo "The co dition is true"
else
        echo "This condition is false"
fi
```

## The and operator

```sh
#! /bin/bash

age=10

if [ $age -gt 10 ] && [ "$age" -lt 40 ]
then
        echo "Age is correct"
else
        echo "Age is not correct"
fi
```

The above can also be written as

```sh
#! /bin/bash

age=10

if [[ "$age" -gt 10 && "$age" -lt 40 ]]
then
        echo "Age is correct"
else
        echo "Age is not correct"
fi
```

> The above can also be written as

```sh
#! /bin/bash

age=10

if [ "$age" -gt 10 -a "$age" -lt 40 ]
then
        echo "Age is correct"
else
        echo "Age is not correct"
fi
```

## The or operator

```sh
#! /bin/bash

age=10

if [ "$age" -gt 10 -o "$age" -lt 40 ]
then
        echo "Age is correct"
else
        echo "Age is not correct"
fi
```

> The above can also be written as

```sh
#! /bin/bash

age=10

if [[ "$age" -gt 10 || "$age" -lt 40 ]]
then
        echo "Age is correct"
else
        echo "Age is not correct"
fi
```

> The above can also be written as

```sh
#! /bin/bash

age=10

if [ "$age" -gt 10] || ["$age" -lt 40 ]
then
        echo "Age is correct"
else
        echo "Age is not correct"
fi
```
