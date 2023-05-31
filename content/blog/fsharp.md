---
title: F# basics
description: F# basics - variables, loops and more
featuredImage: /blog/fsharp.png
slug: fsharp
type: Post
---

F# is a powerful, open-source, functional-first programming language developed by Microsoft and is a part of the .NET family. While F# supports both functional and object-oriented programming paradigms, its true strength lies in its functional aspects. This article will give an overview of some of the basics of F# programming.

## Getting Started with F#

Before you start programming in F#, you need to install the .NET SDK (Software Development Kit), which includes F#. You can check if it's installed on your machine by running the following command in your terminal:

```bash
dotnet --version
```
If it's not installed, you can download it from the .NET official website. 
- https://dotnet.microsoft.com/en-us/ 

## Basic Syntax
F# has a unique syntax that might seem unusual at first, especially if you're coming from a C-style language. Here's a basic F# program:

```fsharp
// This is a comment in F#
let hello = "Hello, World!" // 'let' is used to declare a value
printfn "%s" hello // 'printfn' is a built-in function to print a string followed by a new line
```
F# uses indentation, similar to Python, to define scope instead of braces `{}`.

## Functions

Functions are fundamental in F#. Here's a simple example of a function that adds two numbers:
```fsharp
let add x y = x + y
```
You can call the function like this:

```fsharp
let sum = add 3 5
```
In F#, functions are first-class citizens. This means they can be passed as arguments to other functions, returned as values from other functions, and assigned to variables.

## Immutability
One of the main features of functional programming in F# is immutability. In F#, values are immutable by default, which means they can't be changed once they're defined:

```fsharp
let x = 10
x = 20 // This will result in a compilation error
```

## Conclusion
This is just the tip of the iceberg when it comes to F#. While the language might seem unusual at first, especially if you're coming from a more traditional OOP background, it has a lot to offer in terms of writing safe, maintainable, and efficient code. Happy coding!

This gives you a basic understanding of F#, but there's a lot more to learn. Check out the [official F# documentation](https://fsharp.org/) to learn more.
