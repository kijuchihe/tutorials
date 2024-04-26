# Introduction to Web Development

## Terms Covered

1. Internet
2. Internet Protocol Suite
3. IP Address
4. TCP
5. Packets
6. Web
7. HTTP
8. URL
9. Browser
10. Client
11. Server
12. Request
13. Response
14. HTTP Messages
15. Domain Name
16. Registrar
17. ICANN
18. DNS
19. HTML
20. CSS
21. JS

## How the web works

It is a network of billions of machines connected togeher. Officially born on Jan 1st, 1983 thanks to the establishment of the "Internet Protocol Suite" which standardised the way these computers communicated

Data Link (Physical devices) -> Network (IP) -> Transport(TCP or UDP) -> Application (HTTP, SMTP or FTP)

The internet protocol is used to identify different computers on the network by assigning each one a unique IP Address.

These computers can then send data back and forth with the Transmission control protocol (TCP).

It breaks data into a bunch of small packets (like puzzle pieces) and sends them through a bunch of physical components like fibre-optic cables and modems before they are put together by the receiving computer.

You can think of the internet as hardware (the connection or networking between computers world wide). The internet is not the same thing as the web.

WEB is like software that sits on top of the internet where people can access web pages with the Hypertext Transfer Protocol (HTTP).

What is special about it is that it gives every page of content a Uniform Resource Locater (URL).

Humans use a tool called the web browser to access a URL where it can be rendered visually on the screen. The Browser is called the client (in this case) because it is consuming information but on the other end of that URL, there is another computer called a "server". It received an HTTP request from the client then sent a "response" containing the requested content. These are called HTTP Messages.

Every web page has a unique domain name fireship.io, example.com

A domain name can be registered by anyone via a Registrar who is accreditted by ICANN: A non-profit responsible for overseeing namespaces on the internet.

When you navigate to a domain in a browser, it gets routed through the Domain Name System (DNS) that maps these domain names to an actual IP Address on a server somewhere. DNS is like the phonebook of the internet.

When you look at a webpage, the actual content you see is actually represented by Hypertext Markup Language.

Most browsers have devtools where you can inspect the structure of the HTMl at any time.

To build your own web page, you'll need a text editor (like vscode).

## HTML

### Things we will learn

1. Dev Tools
2. (Text) Editor
3. Elements
4. Forms
5. Attributes
6. Anchor
7. DOM
8. Root
9. Head
10. Metadata
11. Title
12. Body
13. Semantics
14. Accessibility

An HTML document is a collection of elemts, where an element is an opening and closing "tag" with some content in the middle.

```html
<p>This is an element</p>
```

It also has elements that handle input, like the input and select elements used to build forms

```html
<form>
  <input />
  <select>
    <option></option>
  </select>
</form>
```

Elements can have one or more attributes to change the behaviour of the element.

```html
<input type="text" />
<!-- Type in the above is called an attribute -->
```

The element that puts the hypertext in HTML is the a tag `<a href="">Tags</a>` or Anchor element. It creates a link that allows one page to navigate to another page using the URL.

These elements are nested together in a heirachy to form the Document Object Model (DOM). From the root element `<html></html>`, The web page is split into two parts, the head `<head></head>` and the body `<body></body>`

The head contains invisible content like metadata and the title.

The body contains the main content that the user actually sees.

The reason we wrap everything in tags is to give the browsers and bots hints about the semantic meaning of the web page. This allows search engines to display results properly and also helps with accessibility for the websites to be accessible to all people and people with disabilities.

One of the most common elements is the div element which is used to show a section of the website.

## CSS

The website with just plain text with html and we often ask the question how to we make it beautiful. That is where CSS comes in.

### Things we will learn in CSS

1. CSS
2. Inline Styling
3. Properties and Values
4. Cascade
5. Style Tag
6. Classes
7. Specificity
8. External Stylesheet
9. Box Model
10. Padding
11. Border
12. Margin
13. Block
14. Inline
15. Positioning (Relative, Absolute, Fixed)
16. Responsive Layout
17. Media Query
18. Flexbox
19. Grid
20. Calc
21. Custom Variables ()
22. Sass

CSS allows you to change the appearance of the HTML elements. This can be accomplished by inline-styles using the style attribute of the element. The style itself contains a collection of properties and values. Inline Styling affects just one element.

CSS cascades: meaning it can be applied to multiple elements at the same time Providing better code reusability. This can be done by moving our code into a style tag but to make the code work, we will first need to define a selector so it will know which elements to target.

A selector could be to target all the paragraph tags on the page.

```html
<style>
  p {
    background-color: red;
  }
</style>
```

This selector is however too broad and we can introduce what we call a class

```html
<html>
  <head>
    <style>
      .paragraph {
      }
    </style>
  </head>
  <body>
    <p class="paragraph">
      Since it has the paragraph class, the style for paragraph will be
    </p>
  </body>
</html>
```

CSS contains a bunch of specificity rules that determines which styles are relevant to an element.

Most times we don't use the style tag. We use external stylesheets which is linked to the web page in the head of the document

One of the most difficult things to learn in CSS is Layout and Positioning: Thinking of everything as a box. The outside of the box has padding, then a border and margin.

These elements take up space from top to bottom. Some elements have a display of block by default

## JS

You needd to know this as a web developer. Technically you don't need to know this to make a website but it is added to make the UI more interactive

### Things you will learn in JS

1. Script Tag
2. Defer (attribute)
3. ECMA script
4. Let
5. Const
6. Dynamically typed (not always ideal)
7. Typescript
8. Events (Most use of JS)
9. Browser APIs (like document, window, etc.)
10. querySelector
11. Event Listener (function to be called when an event (line clicked button) is done)
12. Data Structures (like arrays(collection of values), objects(the most fundamental data structure in JS)).
13. Arrays
14. Objects - also called dictionaries or hashmaps
15. Primitive Data Types: String, Number, Bigint, Boolean, Undefined, Symbol, Null
16. Everything that is not primitive inherits from an object (Everything else is an object)
17. Prototypal Inheritance - This is the principle behind which all things are objects in js. An object can be cloned multiple times to create a chain of ancestors where the child inherits the properties and methods from its ancestors.
18. Class-based inheritance - This is different from prototypal inheritance which is kinda confusing because these classes are also supported in JS
19. Classes: In JS, classes are syntactic sugar for prototypal inheritance
20. Most developers don't like prototype so they use frontend frameworks
21. Frontend Frameworks: All do the same thing in a slightly different way represented in ui as a tree of components
22. Components: A component can encapsulate HTML, CSS and JS in a format that looks likes a custom HTML elemnent.
23. Declarative Code: Code produced by frameworks that is easier to work with than Imperative Code
24. Imperative Code: You'll normally get with vanilla js

```js
const wolf = {
  type: "canine",
};

const pug = Object.create(wolf, { name: { breed: "pug" } });
```

## Nodejs

### Things to learn

1. Nodejs
2. V8 Engine
3. Single Threaded, non-blocking event loop.
4. NPM
5. Package/Module (File with export statement)
6. Import statement

A server side run time based on js. You can write server code for applications in different languages but node is the most popular because it relies on a single language as the browser and also runs on the same V8 engine that runs on the chrome browser to run code in a single threaded, non-blocking event loop. This allows node to handle many simultaneous connections quickly and efficiently.

## Redering

Now that we have a backend, we have to think of how to deliver the website to the client

### Things to note

1. SSR
2. Request
3. HTTP Method - (GET, POST, PUT, PATCH, DELETE)
4. Status Code
5. Response
6. SPA
7. JSON
8. SSG
9. Hydration

### SSR - Server Side Rendering

This is the classic option. In this approach, the client will make a get request, for a certain url. A request has an HTTP method and GET means to retrieve the data. So in SSR, when the request is made, all the HTML is generated on the server and sends it back to the client as a response. SSR is extremely popular but in some cases, it may not be fast enough.

### SPA - Single Page Application

This is another approach, the server renders a shell for the root url and js handles the rendering or all other pages on the website. HTML is generated almost entirely client side on the browser. The website feels more like a native IOS or Android app (You'll notice that there is not much reloading to get pages or content). When the app needs more data, it makes a request to get a minimal about of data in JSON which is called a data interchange format which can be understood by any programming language. This results in a great user experience. However, It can be very difficult for bots like search engines and social media previews to understand. This lead to another one called Static Site Generation.

### SSG

In this case, every web page on the site is uploaded to a server in advance, allowing bots to get the information they need. A frontend js framework usually takes over to hydrate the html to make it fully interactive and make it feel like a native mobile app.

## Performance

Performance is extremely important and you will want to use tools like lighthouse to optimise metrics like

FCP - First Contentful Paint
TTI - Time to Interactive

## Full Stack Frameworks

To implement these patterns, most developers will use a full-stack framework like nextjs, django, laravel, ruby on rails etc.

They abstract most of the tedious things that developers don't want to do: one of which is **module bundlers** which are tools like Webpack, which package your html, css and js into what the browser will understand. They also sometimes provide a linter like eslint to warn you when your code does not follow the proper style guidelines.

## Database

You always need a database to build a fullstack application because you will need somewhere to store your data. To get that data, you'll need to add a way to login in a process called User-Authentication.

## Testing

Before you deploy your code you will need to test it with a web server. There are tools like apache and engineX. You create an http server but your framework will likely do this for you by serving the files on localhost which makes your own IP address behave like a remote web server.

## Deploying

You'll likely use a cloud provider like AWS.

## Containers

Most apps are containerised with docker making them easy to scale up and down based on the amount of traffic that they receive.

There are many tools that function as a Platform as a Service (PAAS) that manage this infrastructure for you in exchange for your money or if you don't want to get locked in with a big tech company, you can deploy on the decentralised blockchain.
