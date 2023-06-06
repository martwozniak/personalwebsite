---
title: Java Tutorial
description: Java Tutorial - Basics, semantics and more
featuredImage: /videos/java.png
slug: java-tutorial
type: Video
link: none
---

# Introduction to Java Programming
Java is an object-oriented programming language developed by Sun Microsystems, which is now owned by Oracle. It is one of the most popular languages for various kinds of applications, from web development to mobile applications, to large enterprise systems.

Java was designed with the following key principles:

- *"Write once, run anywhere" (WORA)*: This principle means that you can develop Java code on any device, compile it into low-level machine code, and then execute that code on any platform that has a Java Virtual Machine (JVM).

- *Object-Oriented Programming (OOP)*: Java strictly follows the object-oriented programming model, which allows us to structure our programs as collections of objects that interact with each other.

- *Robust and Secure*: Java includes many features that help prevent serious errors, and it's designed to be secure from the ground up.

This post will introduce some of the basic concepts of Java programming. Let's dive in.

## Setting Up the Java Development Environment
Before you start coding in Java, you need to set up a development environment. The basic requirements are:

- The Java Development Kit (JDK)
- A text editor or Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse

For installation guides, you can refer to (Oracle's official website)[https://www.oracle.com/java/technologies/downloads/#java11] or to various online tutorials.


## Your First Java Program

Let's begin with a basic Java program. In Java, every application begins with a class definition. Here is the most basic form of a Java class:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

This program prints the string "Hello, World!" to the console. Let's break down what's going on here:

- `public class HelloWorld`: This line starts the definition of a new class, named HelloWorld. The keyword public means that the class is accessible anywhere.

- `public static void main(String[] args)`: This is the main method that the JVM calls when the program starts. The String[] args parameter represents command-line arguments.

- `System.out.println("Hello, World!")`: This line outputs the string "Hello, World!" to the console.

To compile and run this program, save it into a file named `HelloWorld.java`, open a command prompt in the same directory as the file, and type:

```bash
javac HelloWorld.java
java HelloWorld
```

The first command (`javac`) compiles the Java code into bytecode, and the second command (`java`) runs the program. You should see `Hello, World!` printed to your console.

## Basic Java Syntax

### Variables and Data Types
Java is a statically-typed language, which means that every variable must have a declared type. Here are the eight primitive data types in Java:

```java
byte num1 = 10;       // Byte - integer of 1 byte size
short num2 = 100;     // Short - integer of 2 bytes size
int num3 = 1000;      // Int - integer of 4 bytes size
long num4 = 10000;    // Long - integer of 8 bytes size
float num5 = 20.0f;   // Float - floating point number of 4 bytes size
double num6 = 200.0d; // Double - floating point number of 8 bytes size
char letter = 'A';    // Char - a single Unicode character of 2 bytes size
boolean flag = true;  // Boolean - true or false
```

### Conditional Statements
Java includes conditional statements to control the flow of execution in your program. Here's an example using `if`, `else if`, and `else`:

```java
int num = 10;
if (num > 10) {
    System.out.println("Number is greater than 10");
} else if (num < 10) {
    System.out.println("Number is less than 10");
} else {
    System.out.println("Number is 10");
}
```

### Loops

Java provides several ways to iterate over a sequence of statements. The `for loop` is one of them:

```java
for (int i = 0; i < 10; i++) {
    System.out.println("The value of i is: " + i);
}
```

### Arrays
An array is a container that holds a fixed number of values of a single type. Here's an example of how to declare, instantiate, and initialize an array in Java:


```java
int[] myArray = new int[10]; // Declare and instantiate
for (int i = 0; i < myArray.length; i++) {
    myArray[i] = i * 10; // Initialize
    System.out.println(myArray[i]);
}
```

### Classes and Objects
As mentioned earlier, Java is an object-oriented language, which means it represents concepts as "objects" that have data fields (attributes) and associated procedures known as methods. Here is a simple example:

```java
public class Car {

    // Attributes of the Car class
    private String color;
    private int speed;

    // Constructor method
    public Car(String color) {
        this.color = color;
        this.speed = 0;
    }

    // Method to increase speed
    public void accelerate(int amount) {
        speed += amount;
    }

    // Method to display car information
    public void displayInfo() {
        System.out.println("This car is a " + color + " car traveling at " + speed + " km/h.");
    }
}

// Create a new Car object and use it
public class TestCar {
    public static void main(String[] args) {
        Car myCar = new Car("red");
        myCar.accelerate(60);
        myCar.displayInfo();
    }
}
```
In this example, `Car` is a class, which is like a blueprint for creating car objects. An object is an instance of a class - so when we say `Car myCar = new Car("red");`, we are creating a new instance of the `Car` class.


## Conclusion

That's a basic introduction to Java programming. It's a broad and versatile language with a lot to offer, so if you're interested in learning more, there are many resources available online to help you further develop your skills. Happy coding!