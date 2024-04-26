# Design Patterns

## Observer

Contains an obeservable and an observer.

Observable is the server = http.creat

Observer is the events or listening

```js
import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Your ownserver here");
});

server.on("error", (err) => {
  console.log("Error ", err);
});

server.listen(3000, "", () => {
  console.log("Server up and running");
});
```
