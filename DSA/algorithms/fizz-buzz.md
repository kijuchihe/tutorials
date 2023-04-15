# Fizz Buzz

This is a very common algorithm in job interviews.

If you are coming from backgrounds in python, java and swift, these can be very
helpful

You may have seen Fizz Buzz written as Fizz Buzz, FizzBuzz, or Fizz-Buzz;
they're all referring to the same thing. That "thing" is the main topic of
discussion today.

### First, what is FizzBuzz?

Imagine a series of a number from 1 to 10. `1 2 3 4 5 6 7 8 9 10` Fizz and Buzz
refer to any number that's a multiple of 3 and 5 respectively.

In other words, if a number is divisible by 3, it is substituted with fizz; if a
number is divisible by 5, it is substituted with buzz.

If a number is simultaneously a multiple of 3 AND 5, the number is replaced with
"fizz buzz."

In essence, it emulates the famous children game "fizz buzz".

Example in python

```py
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# We need to then iterate to find the fiz and buzz
for number in numbers:
    if number % 3 == 0 and number % 5 == 0:
        print(f"{number} fizz-buzz")
    elif number % 3 == 0:
        print(f"{number} fizz")
    elif number % 5 == 0:
        print(f"{number} buzz")
```

Wait...it's not over though! The whole purpose of the algorithm is to customize
the runtime correctly.

Imagine if the range increases from 1-15 to 1-100. The compiler will check each
number to determine whether it is divisible by 3 or 5.

It would then run through the numbers again to check if the numbers are
divisible by 3 and 5.

The code would essentially have to run through each number in the array twice —
it would have to runs the numbers by 3 first and then run it by 5.

To speed up the process, we can simply tell our code to divide the numbers by 15
directly.

```py
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# We need to then iterate to find the fiz and buzz
for number in numbers:
    if number % 15:
        print(f"{number} fizz-buzz")
    elif number % 3 == 0:
        print(f"{number} fizz")
    elif number % 5 == 0:
        print(f"{number} buzz")
```
