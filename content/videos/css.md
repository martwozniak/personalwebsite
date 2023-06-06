---
title: CSS Tutorial
description: CSS Tutorial - Basics, semantics and more
featuredImage: /videos/css.png
slug: css-tutorial
type: Video
link: none
---

# Basic CSS: Styling Web Pages With Cascading Style Sheets
Web design has come a long way since the early days of the internet, and much of that is due to Cascading Style Sheets (CSS). CSS is a stylesheet language used to describe the look and formatting of a document written in HTML or XHTML. It's a cornerstone technology of the web, alongside HTML and JavaScript.

Let's dive into the basics of CSS to understand how it works and how to use it to style your web pages.

## CSS Syntax
At its most basic level, CSS consists of two main parts: selectors and declarations.

A `selector` is the HTML element that you want to style, and the `declaration` is what you want to do to that element. A declaration itself consists of a `property` and a `value`. The general syntax of CSS is shown below:

```css
selector {
  property: value;
}
```
For instance, if you want all the `<p>` elements on your page to have the color red, your CSS would look like this:

```css
p {
  color: red;
}
```

## Types of CSS

There are three types of CSS: Inline, Internal, and External.

### Inline CSS
Inline CSS is used to apply a unique style to a single HTML element. It's done by adding the `style` attribute directly to the HTML element.

```html
<p style="color: red;">This is a red paragraph.</p>
```
While inline CSS is easy to use, it can lead to messy code if you're styling a large number of elements individually.

### Internal CSS
Internal CSS involves adding styles to the `<head>` section of your HTML document using the `<style>` tag.

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
<body>
  <p>This is a red paragraph.</p>
</body>
```

Internal CSS is useful for single documents, but if you want to use the same styles across multiple pages, you'll have to duplicate your CSS in each document.

### External CSS
External CSS is written in a separate file with a .css extension, which you link to from your HTML document. This is the most efficient method for applying CSS, especially for larger websites because you can apply the same styles to multiple pages.

```css
/* styles.css */
p {
  color: red;
}
```

Link the external CSS file in your HTML file:


```html
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <p>This is a red paragraph.</p>
</body>
```

## CSS Properties
CSS properties are what actually control how an element looks. There are hundreds of properties, each controlling a different aspect of an element's appearance. Let's look at a few basic ones:

- `color`: Sets the color of the text.
- `background-color`: Sets the background color of an element.
- `font-size`: Sets the size of the font.
- `border`: Sets the border around an element.

Here is a simple example that uses these properties:

```css
p {
  color: white;
  background-color: black;
  font-size: 20px;
  border: 1px solid blue;
}
```

## CSS Selectors
Selectors are the part of CSS rules that select the element(s) you want to style. In addition to basic selectors (like `p` to select all paragraphs), there are also more advanced selectors that can select elements based on their attributes, state, and more.

- `.` is used to select elements with a specific class. For example, `.my-class` will select all elements with the class my-class.

```css
.my-class {
  color: blue;
}
```

And in your HTML:

```html
<p class="my-class">This is a blue paragraph.</p>
```

- `#` is used to select an element with a specific id. For instance, `#my-id` will select the element with the id my-id.

```css
#my-id {
  color: green;
}
```
And in your HTML:

```html
<p id="my-id">This is a green paragraph.</p>
```
Note: While classes can be used on multiple elements, ids are meant to be unique and used on a single element.

- CSS also provides `pseudo-classes` which are used to define a special state of an element. For example, `:hover` can be used to change a button's color when the mouse pointer is over it.

```css
button:hover {
  background-color: yellow;
}
```

## CSS Box Model

The CSS box model is a fundamental concept that affects layout in CSS. Every element in CSS is considered as a rectangular box, and this box has several layers: content, padding, border, and margin.

- The `content` is where text and images appear.
- The `padding` is the space between the content and the border.
- The `border` goes around the padding and content.
- The `margin` is the space between borders.


These can be controlled using their respective CSS properties: `padding`, `border`, and `margin`.

```css
div {
  padding: 10px;
  border: 1px solid black;
  margin: 20px;
}
```

## The Cascade
CSS stands for Cascading Style Sheets, and the "cascading" part of the name refers to the way in which decisions about which styles to apply are made.

Styles can come from multiple sources (the browser's default styles, styles the user has specified, external stylesheets, internal stylesheets, inline styles), and when these styles conflict, there's a system in place to determine which will be applied. This system is based on three main factors: importance, specificity, and order.


- `Importance`: Certain styles are considered more important than others. For example, styles marked with !important are given priority.

- `Specificity`: If two rules apply to the same element, the one with higher specificity will be applied.

- `Order`: If two rules have the same importance and specificity, the one that comes last in the CSS is applied.

