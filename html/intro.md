# Introduction to HTML

HTML stands for **Hyper Text Markup Language**. HTML is a **`markup`** language
for designing the basic structure of a website and not a programming language. A
markup language is simply said to be a set of markup tags.

## First HTML File

Enough of all the reading and let's create our first html document

Create a file called `example.html`.

> Make sure the `.html` is there

A small HTML document

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First HTML Website</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My Paragraph</p>
  </body>
</html>
```

The example above shows a simple HTML document.</p>

## DOCTYPE Declaration

In the above example we saw that the there was a written `DOCTYPE`

This doctype tells the browser what type of HTML document we are working with.

For HTML 5, it is declared as follows:

```html
<!DOCTYPE html>
```

## HTML Tags and Elements

In the above example, we some terms or keywords in angle brackets ("`<`" and
"`>`"). These are known as tags.

A tag is a keyword (the tag name) enclosed in angle brackets ("`<`" and "`>`")

Therefore,

- `<head>` is a (head) tag
- `<p>` is also a (paragraph) tag.

These tags normally come in pairs like `<p> and </p>`.

The first tag is called the start tag or popularly known as the opening tag and
it does not have any slash. `<p>`

The second tag on the other hand has a slash before the tag name and is called
the end tag but more often called the closing tag `</p>`

However, some of these do not come in pairs and these are called self closing
tags. Examples of these tags are:

- `<br />`
- `<img src="" alt="" />`
- `<hr />`

Notice the slash before the closing of the tags. The slash is not required but
it is a standard. I personally advise that you adopt the method of adding
slashes

## Elements

### What is an element

Taking a look at these paragraph tags

```html
<p>Content</p>
```

We'll see that the tags have a content in between them. The combination of the
tag and the content result in what is known as an `element`.
