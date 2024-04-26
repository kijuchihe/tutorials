# Event Emitters

The core of the event driven architecture in nodejs are event handlers.

When do you need this event driven architecture? These are popular in the PUB/SUB design pattern.

## What is the Publisher - Subscriber Coding Design Paradigm?

Imagine a publisher and two subscribers
A publisher makes an event and doesn't care if the event is fulfilled or not.

Imagine a caching and you create

Imagine a ticket manager. When a user buys a ticket, we want to create a pdf file and email back to the user. This is not the crucial element of the ticket system. Even when the ticket creation fails, we still want to serve other users.

As soon as the user buys a ticket, a request is sent to the publisher. We then issue an email event then the subscriber that is responsible for sending out tickets

```js
import { EventEmitter } from "events";

// First way of using events
const ticketManager = new EventEmitter();

/*
Encapsulation vs Simplicity
OOP vs functional style
Reusability vs Generic Events
*/

// Method 2
export class Ticket extends EventEmitter {}
```
