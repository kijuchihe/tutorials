# Professional Menus

## Using the select

```sh
select car in car1 car2 car3 car3 car5
do
    echo ${car}
done
```

The above will print out a menu

```txt
1) BMW
2) MERCEDES
3)
```

```sh
select car in car1 car2 car3 car3 car5
do
    case $car in
    BMW)
        echo "BMW SELECTED"
    MERCEDES)
        echo "MERCEDES SELECTED"
    *)
        echo "ERROR please sel"
    esac
done
```
