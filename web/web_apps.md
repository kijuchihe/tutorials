# Web Applications

A web application is a piece of software which can be accessed from a browser

A browser is an application for browsing the internet e.g. Firefox, IE

A web application could be a web server. Howevr a web server could host multiple applications.

A web server is a network application running on some application and listening on some port. The browser is called a web client (more formally a user agent). Technically any application that can speak to a web server is a web client e.g. cURL, Telnet, Postman.

The client communicates with server to get data. For any communication both parties need to use the same set of rules which we call (Prrotocols).

Just like language and set grammar rules to understand each other.

Browsers use some standard protocols like HTTP protocol, FTP protocol (File transfer), WebSocket protocol, SMTP protocol etc. and these protocols are suitable for different tasks.

The most popular is the HTTP protocol.

## HTTP protocol

What is a web resource? This is like an HTML, PDF, JSON document, XML file etc. Which is hosted by a web server. The web client can access these documents through the web server.

A resource could be static or dynamic. A resource which never changes is a static resource like a static file resting the hard disk of the server like images. When a request is made, the server just serves the data.

A dynamic file is generated on the fly. When a request is made, the web server builds the resource on the fly.

Each resource is identified by a unique URL which stands for a unique resource locater

HTTP protocol is a request-response protocol. When ever a client needs to do an operation on a resource, like reading, updating etc.

A connection is first registered.
A request is then sent. This request contains details of that the client wants in the form of headers.
When the request is received and processed, the server responds by the sending the Response.
After the response is sent, the connection is closed.
If a new request is sent, it will be treated as a new one as both the client and the server don't remember anything abbout the response or requests made before. For this, the http is called a **stateless protocol** and one pair of request and response is called an **HTTP Transaction**.
