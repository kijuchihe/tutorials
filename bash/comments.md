# Comments

A comment is something is never executed and is usually used to explain the
written code

## Single line comment

A single line comment is usually preceded by a hash `#`

```sh
# This is a comment
echo "This comment is above"
```

## Multi-line comment

```sh
:'
Every thing inside this is commented
Here doc
'
```

## Here Doc

```sh
#! /bin/bash

# cat < hereDocDellimeter

cat << hereDoc
This is the value of this hereDoc comment.
This comment will however be outputed to the console
hereDoc
```
