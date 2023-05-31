---
title: C++ Basics
description: C++ Language is static typed language that allows you to create fast and reliable applications
featuredImage: /blog/cpp.png
slug: cpp
type: Post
---

C++ is a statically-typed, free-form, multi-paradigm, compiled, general-purpose programming language. C++ is a middle-level language, as it encapsulates both high-level and low-level language features. 

## What you'll learn

- Understanding the basic structure of a C++ program
- Variables and data types in C++
- Basic input/output in C++
- Control flow in C++

## Structure of a C++ Program

A simple C++ program typically includes the following parts:

```cpp
#include <iostream>
using namespace std;

int main() 
{
  cout << "Hello, World!";
  return 0;
}

```

-`#include <iostream>`: This is a preprocessor command which tells the compiler to include the iostream standard file.

-`using namespace std`: This means we're using the namespace named std. "std" is an abbreviation for standard.

-`int main()`: This is the main function where the program execution begins.

-`cout << "Hello, World!";`: This is the statement to output the string to the screen.

-`return 0;`: This ends the main function and returns 0.

## Variables and Data Types

In C++, variables are used to store data. A variable has a data type, which defines the kind of data it can store. The basic data types are int (integer), float (floating point number), double (double precision floating point number), and char (character).

For example:

```cpp
int a = 10;
float b = 20.0;
double c = 30.00;
char d = 'D';
```

## Basic Input/Output
C++ uses streams to perform input and output. The `cout` object, together with the `<<` operator, is used to output values. On the other hand, the cin object, with the `>>` operator, is used to get input.

For example: 

```cpp
int num;
cout << "Enter a number: ";
cin >> num;
cout << "You entered " << num << endl;
```

## Control Flow

Control flow is the order in which the program's code executes. The control flow of a C++ program is regulated by decision-making statements (if-else and switch), loops (for, while, do-while), and jumps (break, continue, goto).

For example, a basic if-else statement:

```cpp
int num = 10;

if(num > 5) 
{
  cout << "Number is greater than 5" << endl;
} 
else 
{
  cout << "Number is not greater than 5" << endl;
}
```

This is a very basic introduction to C++. C++ is a vast language with many advanced topics to explore such as classes, inheritance, polymorphism, exception handling, file handling, and much more.