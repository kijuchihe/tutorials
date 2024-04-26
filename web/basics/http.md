# INTRODUCTION TO THE WEB

## HOW THE WEB WORKS

The web works through a series of interactions between your device and remote servers, all coordinated by protocols and languages. Here's a simplified breakdown:

Entering a website:

You type a web address (URL) into your browser. This address acts like a location name, but for websites.
DNS Lookup:

The browser doesn't understand website names, so it asks a Domain Name System (DNS) server to translate the URL into an IP address. Think of the DNS server as a phonebook that translates website names to numerical addresses computers can understand.
Requesting the webpage:

Once the browser has the IP address, it sends a request message to the web server that stores the website's files. This message uses a language called Hypertext Transfer Protocol (HTTP).
Server Response:

The web server receives the request, retrieves the necessary files (HTML, CSS, JavaScript, images, etc.), and sends them back to your browser in response.
Rendering the webpage:

The browser interprets the files it receives and uses them to build and display the webpage on your screen. HTML defines the structure of the page, CSS styles its appearance, and JavaScript adds interactivity.
Additional requests:

Webpages often contain links to other resources like images or videos. The browser sends separate requests for each of these resources to fully render the page.
Here are some additional details that make the web work:

Packets: Data travels in small packets across the internet. This allows for faster and more efficient transfer.
Routers: These devices direct the data packets along the most efficient route to their destination.
Security: Secure websites use HTTPS protocol which encrypts communication between your browser and the server.

### Working

Entering a website:

URL (Uniform Resource Locator): This is the web address you type into your browser. It consists of several parts:
Protocol (e.g., http:// or https://): Specifies the communication protocol between the browser and server. HTTPS is the secure version that encrypts data.
Domain name: The human-readable name that identifies the website (e.g., [invalid URL removed]).
Path: Specifies the location of a particular webpage within the website (e.g., /search).

DNS Lookup:

Domain Name System (DNS): A distributed network of servers that translates domain names into IP addresses. Imagine a massive phonebook for the internet, maintained by multiple authorities.
DNS record: Each domain name has a corresponding DNS record that stores its IP address and other information.
Requesting the webpage:

Hypertext Transfer Protocol (HTTP): The language browsers and servers use to communicate. An HTTP request specifies the desired resource (webpage, image, etc.) and includes headers with additional information like cookies or authentication details.
Server Response:

Web server: A computer program that stores website files and processes incoming HTTP requests. It retrieves the requested files and sends them back to the browser along with an HTTP response code (e.g., 200 OK for success, 404 Not Found for a missing page).
HTML (HyperText Markup Language): The core building block of webpages, defining the structure and content of a page using tags.
CSS (Cascading Style Sheets): Defines the presentation of a webpage, controlling layout, colors, fonts, and visual styles.
JavaScript: A programming language that adds interactivity and dynamic behavior to webpages.
Rendering the webpage:

Client-side vs. Server-side rendering:
Client-side rendering (most common): The browser receives HTML, CSS, and JavaScript files and interprets them to build and display the webpage.
Server-side rendering: The web server generates a fully rendered HTML page and sends it to the browser, improving initial page load speed but potentially reducing interactivity.
Browser engine: The software component within the browser responsible for parsing HTML, CSS, and JavaScript, and turning them into a visual webpage on your screen.
Additional requests:

TCP/IP (Transmission Control Protocol/Internet Protocol): The fundamental set of protocols that governs how data is broken down into packets, transmitted across the internet, and reassembled at the destination.
Packets: Small chunks of data that webpages are broken down into for efficient transmission across the network.
Routers: Devices that direct data packets along the most efficient route towards their destination server.
Security:

HTTPS (Hypertext Transfer Protocol Secure): Encrypts communication between the browser and the server, protecting sensitive data like passwords from being intercepted. This is why the address bar shows a padlock symbol for secure websites.
Secure Sockets Layer (SSL)/Transport Layer Security (TLS): The cryptographic protocols that form the basis of HTTPS.

## HTTP

HTTP is an application layer protocol for transmitting hypermedia documents such as HTML over the web. It is a ptotocol that exits in the application layer of a network connection ISO Model (real abstraction layer).

HTTP is an application layer protocol used to transfer web page files over the internet, while web is a device management method.

HTTP is a stateless protocol and it follows the client-server method. It is built on top of TCP

The Open Systems Interconnection (OSI) model describes seven layers that computer systems use to communicate over a network. The modern internet is based on a simpler TCP/IP (4 broad layers(App layer, Transport Layer, Internet, Network Access))

Seven Layers:

1. Physical Layer: Transmits raw bits stream over the physical medium
2. Data Link Layer: Defines the format of data on the network
3. Network layer: Decades which physical path the data will take
4. Transport layer: Transmits data using transmission protocols including TCP & UDP (Transmission Control and User Datagram Protocol)
5. Session Layer: Maintains connections and controls points and sessions
6. Presentation Layer: Ensures that data is in a usable form and is where data encryption occurs
7. Application layer: Human-computer interaction layer, where aplications can access the network scene

A media type AKA MIME (Multi-purpose internet Mail Extensions) indicate the nature and format of a document file or assortment of byte const of two parts: type/subtype e.g. text/html, text/css

A proxy server or proxy is an intermediate program/computer used when navigating through different netwoks on the internet. A proxy intercepts request and serves back responses

The user agent is any tool that actson behalf of the user

Proxies may perform

- Caching
- Relaxing Origin Constraint
- Authentication
- Proxy

Features controllable with HTTP:

- Caching
- Relaxing Origin Constraint
- Authentication
- Proxy

### HTTP FLOW

1. Open TCP connection
2. Send a HTTP message
3. Read the response
4. Close or reuse connection

## PROTOCOL

## Things to implement

Cache and chaching db
Redis - Cache/ E-memory database

## Things to learn

Packets
Persist
Storage - Bucket
Blur kind of
Web Agents
Proxy
Scoping and Hoisting

## Learn indepth caching

Cache
Types off caching

Have dolar account
LSP - Language server Protocol

## STATUS AND STATUS CODES

100 - 199 -> Information Codes
200 - 299 -> Success Codes
300 - 399 -> Redirect
400 - 499 -> Client Error Codes
500 - 599 -> Server Error Codes
