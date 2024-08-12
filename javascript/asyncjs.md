# Understanding the event Loop

Javascript is a synchronous single threaded language. It has one call stack and it can only do 1 thing at a time.

The core stack is present in the javascript engine and all the code of javascript is executed inside this call stack.

```js
function a() {
  console.log("a");
}
a();

const name = "";
console.log("End");
```

> NB: Whenever any javascript program is ran, a global execution context is created and this GEC is put inside the call stack

If we have to execute the code above.

The code will run line by line in the GEC

The first line is the fun andction definition of "a" and therefore it will be assigned memory and then stored.

On the fourth line, the **execution context** is created for the function call of `a()`

Now this execution context is pushed inside the `call stack`

Now the code inside the `a()` function will be executed line by line.

Then after a has finished executing, it is removed from the stack.

Then the console.log prints out End

Then the Global Execution Context is removed from the call stack

The main job of the call stack is to execute what ever comes inside it. It does not wait for anything. If you give it anything it executes it immediately

What if we wait for something? What if we want to run something after 5 seconds? In reality, we can't do that because whatever comes inside the callstack is immediately executed. It can't execute a script where you want a code to run after 5 seconds because the call stack does not have a **timer**. So if we have to keep the track of time and execute some piece of code, after some delay we will need extra superpowers of timers.

## Superpowers of Browsers

The call stack is inside the **javascript engine** and this javascript engine is inside **The Browser** and remember that the call stack is where javascript code executes. The Browser also has a **local storage** where you can store data. A **timer** can also be found in a broswer. It can have urls that can access servers and it can receive data and then _display the data_. It also has bluetooth and geolocation etc.

When you write javascript, you will like to access these properties that are on the browser like the timer and localstorage and geolocation. You will need to have a connection to have access to these properties. To do that, we can make use of the web apis

## WEB APIS

All these are not part of javascript but belong to the browser.

- setTimeout():
  - This is not a part of javascript but we have access to it by the browser
- DOM APIs
  - document.\*
- fetch()
- localstorage
- console
  - Even the console is not part of javascript
- location

The browser gives us access into the javascript engine. So javascript engine has these "superpowers" of the browser.

We have access to these properties in the call stack because of the global object. Recall that the call stack only runs codes so the question of how the call stack has access to these properties comes up.

## Global Object

The global object is the **window**. So to access the setTimeout() for example, we will have to use `window.setTimeout()` because set timeout is a method in the window object. If you do `window.localstorage`, we have acess to the superpower of the localstorage in the browser. Similarly if you want the console, we have access to it with the `window.console`

However, in code, we don't usually write window.setTimeout(). window is the global object and setTimeout is in the global object or **global scope**, we can access without that keyword window. The browser wraps all the web apis inside the global object **`window`**.

```js
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");
```

- The javascript first goes to the web api then logs out start
- The setTimeout is then ran
  - The function is stored somewhere (web api environment) in the browser and a timer is started for 5000ms
- The call stack doesn't wait for the code and immediately goes to the next line and logs out End
- Then the global execution context is removed from the call stack.
- After the timer has finished, the call back is ready to be called and it somehow needs to be passed into the callstack but it cannot be directly placed in the callstack. Remember the call stack quickly executes the code.

This is where the **event loop** and the **callback queue** come in. So when the timer expires, the callback is placed in the callback queue. The function of the event loop is to keep checking the callback queue and to put it back into the call stack. So it acts like a gate keeper and it checks if we have something in the callback queue and put the functions in the callback queue into the callstack. Then the callstack quickly executes the code by creating an execution context and then the execution is pushed to the callstack and then executed.

## Other Examples

```js
console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback");
});

console.log("End");
```

- So the global execution context is created
- First line: logs Start
- The addEventListener registers an event listener on the event (click): The cb is registered on the web api environment and an event is attached to it (the click event)
- It moves on to the next and then logs `End`
- The global execution context is gone but the event handler is still in the web apis environment except we explicitly remove the event or close the browser.

When a user clicks the button, the cb is added to the callback queue and waits to get executed.

## Event Loop

The only job of the event loop is to constantly monitor the callback stack and callback queue and to move the function (or callback) from the queue to the stack.

Why do we need the callback queue if you can access the web api environment and use this in the callstack.

If the user clicks the button so many times, the cb will that number of times waiting to be executed. The event loop will check if the stack is empty and then takes the cb from the queue and is put in the stack and slowly it executes the cbs one by one. Because of the number of listeners, it is good to have the queue so that the number of clicks can be executed one by one.

## Fetch in the callback stack and queue

This works slightly different

```js
console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

// Millions of lines of code

console.log("End");
```

Fetch returns a promise and then a callback which will be executed once the promise is resolved

- GEC is created
- Start is logged
- cbT is registered in the web apis environment
- The timer starts
- The fetch function is called and a request is sent to server
- The cbF is registered in the web apis environment
- Once the data is gotten, the cbF is ready to be executed
- However, instead of the callback cbF being pushed to the callback queue, it is pushed to a **microtask queue** instead of the queue.

The microtask queue is similar to the callback queue but it has higher priority. Whatever functions come inside this queue, will be executed first then functions inside the callback queue are executed later.

Network calls, fetch api calls etc are added to the microtask queue

Since the callback stack is not empty when the event loop checks, it does not have a chance to take from the microtask queue or callback queue. So let's say the time runs out and the data is gotten from the fetch

Imagine there are millions of lines of code to be run in the Global Execution Context, what will happen? So after the code is finished running, the event loop takes from the microtask queue and is put inside the callback stack and then ran. It is then popped off from the callstack and the microtask queue. Then the event loop is then loop and then finds out there is the `cbT` function from the callback queue and then pushed to the callback stack.

## What comes inside the microtask queue

1. Promises
2. All callback functions from promises
3. Mutation Observers

Mutation observer keeps checking if there is a mutation in the node tree or not. If there is some mutation in the node tree, it can execute some callback functions

Callback queue is also called task queue.

Even if there are 3 items in the microtask queue and 1 task in the task queue, all the ones in the microtask queue will be executed first.

If the tasks in the microtask queue keep creating microtasks, all of them will have to be executed and then before the one in the callback queue. This leads to a concept called **STARVATION** of the task in the callback queue.
