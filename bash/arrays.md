# Arrays

```sh
cars=("BMW" "TOYOTA" "Honda")

echo "${cars[@]}" # This will print out each item
```

```sh
cars=("BMW" "TOYOTA" "Honda")

echo "${!cars[@]}" # This will print out the indexes -or number of indeces- in the array
```

```sh
cars=("BMW" "TOYOTA" "Honda")

echo "${#cars[@]}" # This will print out the number of items in the array
```

## To delete an item

```sh
cars=("BMW" "TOYOTA" "Honda")

unset car[2]
# This willl delete the Honda
echo "${#cars[@]}" # This will print out the number of items in the array
```

## To replace an item

```sh
cars=("BMW" "TOYOTA" "Honda")

unset car[2]
car[2]="Mercedes"
# This willl delete the Honda
echo "${#cars[@]}" # This will print out the number of items in the array
```
