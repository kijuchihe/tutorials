# Getting details of Linux kernel

We can use command `uname` with various options to get complete details of running kernel.

```sh
uname -a
Linux df1-ws-5084 4.4.0-64-generic #85-Ubuntu SMP Mon Feb 20 11:50:30 UTC 2017 x86_64
x86_64 x86_64 GNU/Linux
```

As per man page here few more options

Usage: `uname [OPTION]...`

Print certain system information.

- With no OPTION, same as -s.
- `-a`, `--all` print all information, in the following order, except omit -p and -i if unknown:
- `-s`, `--kernel-name` print the kernel name
- `-n`, `--nodename` print the network node hostname
- `-r`, `--kernel-release` print the kernel release
- `-v`, `--kernel-version` print the kernel version
- `-m`, `--machine` print the machine hardware name
- `-p`, `--processor` print the processor type (non-portable)
- `-i`, `--hardware-platform` print the hardware platform (non-portable)
- `-o`, `--operating-system` print the operating system
- `--help` display this help and exit
- `--version` output version information and exit
