---
title: HTML Tutorial
description: HTML Tutorial - Basics, semantics and more
featuredImage: /videos/html.png
slug: html-tutorial
type: Video
link: none
---

# Basic HTML: An Introduction
HTML, an acronym for HyperText Markup Language, is the backbone of virtually all websites on the Internet. It is the standard markup language for documents designed to be displayed in a web browser.

HTML uses elements or "tags" to structure content on the web. In this article, we will be introducing you to the fundamental concepts and elements of HTML.

## Structure of HTML
A typical HTML document has the following structure:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <!-- Your content goes here -->
    </body>
</html>
```

Let's break this down:

- `<!DOCTYPE html>`: This declaration helps with the proper rendering and functioning of the webpage across different web browsers.
- `<html>`: This tag is the root element of an HTML page.
- `<head>`: This element contains meta-information about the HTML document, such as its title and link to CSS files (if any).
- `<title>`: This defines the title of the webpage, which is displayed in the browser tab.
- `<body>`: All the content that is displayed to the user on the webpage, such as text, images, videos, etc., is placed between the `<body>` tags.

## Common HTML Elements

Let's go through some commonly used HTML tags:

### Headings and Paragraphs
HTML offers six levels of headings, `<h1>` through `<h6>`, `<h1>` being the highest (or most important) and `<h6>` the least.

```html
<h1>This is a Heading</h1>
<h2>This is a Heading</h2>
...
<h6>This is a Heading</h6>
```

For paragraphs, HTML uses the `<p>` tag.

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### Links
Links in HTML are defined with the `<a>` tag.
```html
<a href="https://www.example.com">This is a link</a>
```
The `href` attribute in the `<a>` tag is used to specify the URL of the page the link goes to.

### Images
The `<img>` tag is used to embed images in an HTML page.

```html
<img src="image.jpg" alt="A description of the image">
```

The `src` attribute specifies the path to the image file, and the `alt` attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the `src` attribute, or if the user uses a screen reader).

### Lists
HTML supports ordered (numbered) and unordered (bulleted) lists. Ordered lists are created with the `<ol>` tag, and unordered with the `<ul>` tag.

```html
<!-- Ordered list -->
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<!-- Unordered list -->
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

The `<li>` tag is used to define each list item.

## Conclusion

This is just scratching the surface of HTML. However, mastering these basics is the first step towards becoming a proficient web developer. In future posts, we will delve into more advanced HTML topics, as well as CSS and JavaScript, the other pillars of web development. Stay tuned!