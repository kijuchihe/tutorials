# Linux Basic Utilities

Linux has a command for almost any tasks and most of them are intuitive and easily interpreted.

## Getting Help in Linux

| Command | Usability |
| ------- | --------- |
| `man <name>` | Read the manual page of `<name>`. |
| `man <section> <name>` | Read the manual page of `<name>`, related to the given section. |
| `man -k <editor>` | Output all the software whose man pages contain `<editor>` keyword. |
| `man -K <keyword>` | Outputs all man pages containing `<keyword>` within them. |
| `apropos <editor>` | Output all the applications whose one line description matches the word editor. When not able to recall the name of the application, use this command. |
| `help` | In Bash shell, this will display the list of all available bash commands. |
| `help <name>` | In Bash shell, this will display the info about the `<name>` bash command. |
| `info <name>` | View all the information about `<name>`.|
| `dpkg -l` | Output a list of all installed packages on a Debian-based system. |
| `dpkg -L packageName` | Will list out the files installed and path details for a given package on Debian. |
| `dpkg -l \| grep -i <edit>` | Return all .deb installed packages with `edit` irrespective of cases. |
| `less /var/lib/dpkg/available` | Return descriptions of all available packages.
| `whatis vim` | List a one-line description of vim. |
| `<command-name> --help` | Display usage information about the `<tool-name>`. Sometimes command `-h` also works, but not for all commands.

## User identification and who is who in Linux world

| Command | Usability |
| ------- | --------- |
| `hostname` | Display hostname of the system. |
| `hostname -f` | Displays Fully Qualified Domain Name (FQDN) of the system. |
| `passwd` | Change password of current user. |
| `whoami` | Username of the users logged in at the terminal. |
| `who` | List of all the users currently logged in as a user. |
| `w` | Display current system status, time, duration, list of users currently logged in on system and other user information. |
| `last` | Who recently used the system. |
| `last root` | When was the last time root logged in as user. |
| `lastb` | Shows all bad login attempts into the system. |
| `chmod` | Changing permissions - read,write,execute of a file or directory. Checkout [Shortcuts](./file-management-commands.md/#filedirectory-permissions-and-groups)|

## Process related information

| Command | Usability |
| ------- | --------- |
| `top` | List all processes sorted by their current system resource usage. Displays a continually updated display of processes (By default 3 seconds). Use `q` key to exit top. |
| `ps` | List processes currently running on current shell session |
| `ps -u root` | List all of the processes and commands root is running |
| `ps aux` | List all the processes by all users on the current system |
