# Working With Users

| Parameter | Details                                                                              |
| --------- | ---                                                                                  |
| username  |The name of the user. Do not use capital letters, do not use dots, do not end it in dash, it must not include colons, no special characters. Cannot start with a number.|

## Setting your own password

```sh
passwd
```

## Setting another user's password

Run the following as root:

```sh
passwd username
```

## Adding a user

Run the following as root:

```sh
useradd username
```

## Removing a user

Run the following as root:

```sh
userdel username
```

## Removing a user and its home folder

Run the following as root:

```sh
userdel -r username
```

## Listing groups the current user is in

```sh
groups
```

More detailed information about user and group numerical IDs can be found with the `id` command.

## Listing groups a user is in

```sh
groups username
```

More detailed information about user and group numerical IDs can be found with ``id username``.
