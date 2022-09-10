# Searching for files by patterns in name/contents

A common and task of someone using the Linux Command Line (shell) is to search for files/directories with a
certain name or containing certain text. There are 2 commands you should familiarise yourself with in order to
accomplish this:

## Find files by name

```sh
find /var/www -name '*.css'
```

This will print out the full path/filename to all files under /var/www that end in .css.

```sh
# Example output:

/var/www/html/text-cursor.css
/var/www/html/style.css
```

For more info:

```sh
man find
```

## Find files containing text

```sh
grep font /var/www/html/style.css
```

This will print all lines containing the pattern font in the specified file.

```sh
# Example output:

font-weight: bold;
font-family: monospace;
```

> Another example:

```sh
grep font /var/www/html/
```

> This doesn't work as you'd hoped.
>
> You get:

```sh
grep: /var/www/html/: Is a directory
```

> **Note:** You need to grep recursively to make it work, using the -R option:

```sh
grep -R font /var/www/html/
```

> Hey nice! Check out the output of this one:

```sh
/var/www/html/admin/index.php: echo '<font color=red><b>Error: no dice</b></font><br/>';
/var/www/html/admin/index.php: echo '<font color=red><b>Error: try again</b></font><br/>';
/var/www/html/style.css: font-weight: bold;
/var/www/html/style.css: font-family: monospace;
```

> **Note:** Notice that when grep is matching multiple files, it prefixes the matched lines with the filenames. You can use the `- h` option to get rid of that, if you want.

For more info:

```sh
man grep
```
