# Introduction to JavaScript

Javascript is a programming language that is used for web development (these
days both frontend and backend). Unlike HTML, javascript (JS) is a programming
language since it has a concept.

## Uses Of JavaScript

- Changing HTML Content
- Changing HTML attributes
- Changing HTML Styles (Or CSS): This is similar to changing HTML attributes
- It can be used to validate data
- Enhancing the user interface

## Ways of Writing Javascript

- Javascript can be written in HTML using the script tag You can write the JS
  code in the script tag

```html
<script>
  // JS code goes here
</script>
```

- You can or link the JS to the HTML document still using the script tag but
  with an `src` attribute

```html
<script src="url-of-javascript-document"></script>
```

## Writing our first javascript file

Now enough of the introduction and let's write our first javascript file

> A small HTML document

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      document.write("This is my first script");
    </script>
    <title>My First HTML Website</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My Paragraph</p>
  </body>
</html>
```

The script tag can be put in either the `head` element or the body element but
no matter where you put it, it is advised that you put all your script tags in
the same place either in the body or the head tag.

### Personal Advice on where to put the script tags

However, here at Kmavi, we advise that you place all your script tags at the end
of the body tag as this increases the speed of the loading the page.

You should also note that when you are saving an external javascript we save it
as an `name_of_file.js`

In most cases we advise that you use the external javascript as it

- Separates html and the code
- It makes HTML and Javascript easier to read and maintain
- Cached Javascript files can speed up page loads
