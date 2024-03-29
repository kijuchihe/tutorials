# Linux shortcuts

There are some shortcuts that might come in handy when using a linux based OS

## Opening a terminal

- `Ctrl + Alt + T` or `Super + T`

## Cursor Movement

- `Ctrl + A` Go to the beginning of the line you are currently typing on.
- `Ctrl + E` Go to the end of the line you are currently typing on.
- `Ctrl + XX` Move between the beginning of the line and the current position of
  the cursor.
- `Alt + F` Move cursor forward one word on the current line.
- `Alt + B` Move cursor backward one word on the current line.
- `Ctrl + F` Move cursor forward one character on the current line.
- `Ctrl + B` Move cursor backward one character on the current line.

## Text manipulation

- `Ctrl + U` Cut the line from the current position to the beginning of the
  line, adding it to the clipboard. If you are at the end of the line, cut the
  entire line.
- `Ctrl + K` Cut the line from the current position to the end of the line,
  adding it to the clipboard. If you are at the beginning of the line, cut the
  entire line.
- `Ctrl + W` Delete the word before the cursor, adding it to the clipboard.
- `Ctrl + Y` Paste the last thing from the clipboard that you cut recently (undo
  the last delete at the current cursor position).
- `Alt + T` Swap the last two words before the cursor.
- `Alt + L` Make lowercase from cursor to end of word.
- `Alt + U` Make uppercase from cursor to end of word.
- `Alt + C` Capitalize to end of word starting at cursor (whole word if cursor
  is at the beginning of word).
- `Alt + D` Delete to end of word starting at cursor (whole word if cursor is at
  the beginning of word).
- `Alt + .` Prints the last word written in previous command.
- `Ctrl + T` Swap the last two characters before the cursor.

## History access

- `Ctrl + R` Lets you search through previously used commands.
- `Ctrl + G` Leave history searching mode without running a command.
- `Ctrl + J` Lets you copy current matched command to command line without
  running it, allowing you to make modifications before running the command.
- `Alt + R` Revert any changes to a command you’ve pulled from your history, if
  you’ve edited it.
- `Ctrl + P` Shows last executed command, i.e. walk back through the command
  history (Similar to up arrow).
- `Ctrl + N` Shows next executed command, i.e. walk forward through the command
  history (Similar to down arrow). Terminal control
- `Ctrl + L` Clears the screen, similar to the clear command.
- `Ctrl + S` Stop all output to the screen. This is useful when running commands
  with lots of long output. But this doesn't stop the running command.
- `Ctrl + Q` Resume output to the screen after stopping it with Ctrl+S.
- `Ctrl + C` End currently running process and return the prompt.
- `Ctrl + D` Log out of the current shell session, similar to the exit or logout
  command. In some commands, acts as End of File signal to indicate that a file
  end has been reached.
- `Ctrl + Z` Suspends (pause) currently running foreground process, which
  returns shell prompt. You can then use `bg` command allowing that process to
  run in the background. To again bring that process to foreground, use fg
  command. To view all background processes, use jobs command.
- `Tab` Auto-complete files and directory names.
- Tab Tab Shows all possibilities, when typed characters doesn't uniquely match
  to a file or directory name.

## Special characters

- `Ctrl + H` Same as Backspace.
- `Ctrl + J` Same as Return (historically Line Feed).
- `Ctrl + M` Same as Return (historically Carriage Return).
- `Ctrl + I` Same as Tab.
- `Ctrl + G` Bell Character.
- `Ctrl + @` Null Character.
- `Esc` Deadkey equivalent to the Alt modifier.

## Close Terminal

- `Ctrl + Shift + W` To close terminal tab.
- `Ctrl + Shift + Q` To close entire terminal. Alternatively, you can switch to
  the vi keybindings in bash using set `-o` vi. Use set `-o` emacs to switch
  back to the emacs keybindings.
