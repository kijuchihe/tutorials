# API Best Practices

Make sure you only optimise after you've realised that an endpoint has performance issues

Check out [https://github.com/microsoft/api-guidelines](https://github.com/microsoft/api-guidelines)

## Using good naming conventions

1. Dont use verbs on the api end point: like `/getPosts`

   > `/posts`: GET request, get posts, POST request add post
   > `/posts/:id` > `/posts/:id/user`

2. Dont add versioning like `postsByIDV1`
   > `api/v1/posts/:id`: This is a better approach: appending the versioning to the api
3. Make names clear:
   > Instead of `storeInventory`, use `store-inventory`

## HTTP Methods

- GET - use it to fetch
- POST - To create
- PUT - Adding content/ Updating content
- PATCH -
- DELETE - Delete an item

## Status Codes

Use the appropriat status codes

- 100 - 199: Informational
- 200 - 299: Successful Codes
- 300 - 399: Redirection Messages
- 400 - 499: Client Errors
  - 400: Bad Request
  - 401: Unauthorised: Here the client is not known on the server and so has to either login or register
  - 402: Payment Required
  - 403: Forbidden - Here, the client is not but is not allowed to access that page.
  - 404: Not found
  - 405: Method Not Allowed
- 500 - 599: Server Errors

## Caching

The HTTP Cache stores a response associated with a request and reuses the stored response for subsequent requests.

This can be done by the Cache-Control HTTP header. This header field holds directives (instructions) - in both requests and responses - that control caching in browsers and shared caches (e.g. Proxies, CDNs)

good approach in nodejs/typescript

```ts
const setCache = function (req, res, next) {
  const period = 60 * 5;
  // You should apply cache for only get methods
  if (req.method == "GET") {
    res.set("Cache-control", `public, max-age=${period}`);
  } else {
    res.set("Cache-Control", "no-store");
    next();
  }
};

app.use(setCache);
```

Use something like `redis` to cache data that is used often

## Optimisation

- Reducing the number of HTTP requests for getting a piece of data that is very related

For example if you have posts from a specific user, if your data returns the user id, the client will have to

## Avoid N+1 Queries

## Use JSON quick Serialisation

## Connection Pool

Use a connection pool so that you don't have to keep opening and closing connections to the database

## Rate Limiting

## Pagination

## Asynchronous Loggin

This reduces waiting time

Instead of doing this

> `Logs => Buffer => flush => Disk`

Do this instead:

## Compression of payload

Use brotli algorithm or CDNS like cloudflare
