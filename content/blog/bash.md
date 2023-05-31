---
title: Bash Basics
description: Bash Basics with Ubuntu Server
featuredImage: /blog/bash.png
slug: Bash-basics
type: Post
---

Bash, short for Bourne Again Shell, is a command-line interpreter that provides a user interface for the Unix and Unix-like operating systems. This article introduces some of the basic concepts and commands in Bash.

## Introduction to Bash
Bash is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and C shell (csh). It offers functional improvements over sh for both interactive and programming use.


## Navigating the File System
To navigate through the Linux filesystem, you use commands such as cd, ls, and pwd. Here's a quick overview:

- `pwd`: Prints the current working directory.
- `cd`: Changes the current directory.
- `ls`: Lists files and directories in the current directory.

```bash
pwd              # Display the current working directory
cd /home/user    # Change the current directory to /home/user
ls               # List files and directories in the current directory
```

## File Manipulation
Bash also provides several commands for manipulating files and directories:

- `touch`: Creates a new file.
- `cp`: Copies files and directories.
- `mv`: Moves or renames files and directories.
- `rm`: Removes files and directories.

```bash
touch newfile.txt      # Create a new file named newfile.txt
cp file1.txt file2.txt # Copy file1.txt to file2.txt
mv file1.txt file2.txt # Rename or move file1.txt to file2.txt
rm file.txt            # Remove file.txt
```

## Input and Output
The key to mastering Bash (and Unix in general) is understanding input, output, and redirection:

- `>`: Redirects output to a file, overwriting the existing contents.
- `>>`: Redirects output to a file, appending to the existing contents.
- `<`: Redirects input from a file.
- `|`: Pipes the output of one command into the input of another.

```bash
echo "Hello, world!" > hello.txt   # Redirect output to hello.txt
cat hello.txt                      # Display contents of hello.txt
ls -l | grep .txt                  # Pipe output of ls to grep
```
## Conclusion
Bash is a powerful tool for managing and manipulating files and processes in Unix-based operating systems. While it might seem daunting at first, with a bit of practice, you'll find that Bash is a reliable and efficient interface to interact with your system.