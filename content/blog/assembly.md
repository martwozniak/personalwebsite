---
title: Low level programming
description: Low level programming with Assembly x86 and x64
featuredImage: /blog/assembly.png
slug: low-lewel-programming
type: Post
---

Assembly language programming is often considered a daunting task due to its low-level nature. This article explores assembly language programming with an emphasis on the x86 and x64 architectures.

## Introduction to Assembly Language
Assembly language is a low-level programming language for a computer, or other programmable device, where each statement corresponds to a specific machine language instruction. Unlike high-level languages, assembly languages are specific to a particular computer architecture. Two of the most common architectures today are x86 and x64.

```assembly
mov eax, 5     ; This is a comment. Move 5 into the EAX register.
```

## x86 vs x64 Architecture
x86 is a family of backward-compatible instruction set architectures, based on the Intel 8086 CPU. x64 is the extension of the x86 architecture to 64 bits. The key differences between the two are the number of general-purpose registers (GPRs) and the memory address size. x86 has 8 GPRs and can address up to 4GB of memory, while x64 has 16 GPRs and can address a theoretical maximum of 18.4 million TB of memory.

## Basic Assembly Instructions
Assembly language is built around instructions which manipulate data in memory and registers. Common instructions include MOV (move), ADD (add), SUB (subtract), MUL (multiply), and DIV (divide).

```assembly
mov eax, 10     ; Move 10 into the EAX register
add eax, 5      ; Add 5 to the EAX register
```

## Writing Your First Assembly Program
Before you start coding in assembly, you need to set up an assembly development environment. You'll need an assembler, such as NASM, and a debugger, such as GDB.

Here's a simple "Hello, World!" program written in x86 assembly language.

```assembly
section .data
    hello db 'Hello, World!',0

section .text
    global _start

_start:
    ; write hello to stdout
    mov eax, 4            ; system call number (sys_write)
    mov ebx, 1            ; file descriptor (stdout)
    mov ecx, hello        ; message to write
    mov edx, 13           ; message length
    int 0x80              ; call kernel

    ; exit
    mov eax, 1            ; system call number (sys_exit)
    xor ebx, ebx          ; exit code
    int 0x80              ; call kernel

```

This program first writes "Hello, World!" to the standard output and then exits.

## Conclusion

While assembly language programming may seem intimidating at first, it offers an unparalleled insight into the inner workings of a computer. Mastering assembly can make you a better programmer in any language, as the principles of computer operation are universal. Despite its difficulties, understanding and being able to program in assembly is a skill that can set you apart in the world of programming.