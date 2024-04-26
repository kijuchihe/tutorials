# Folder structure

```txt
app:
    layout.js (this will wrap everything) page.js(this will be the index page)
    globals.css (this will be linked to the)
    users:
        page.js (This will show when you go to the /users route http://localhost:3000/users)
        layout.js (This will wrap every page under the users route)
        error.js (This page will be loaded when there is an error accessing this route)
        loading.js (This will be run when every page in the about is loading)
        new:
            page.js (This page will be uploaded when http://localhost:3000/users/new)
        [id]:
            page.js(This will be a dynamic route)
```

The page.js of a dynamic route

```jsx
const page = () => {
  return (
    <div>{id}</div>
    // Notice that the id was easily accessed in the page
  );
};
```

> error.js

```js
"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // log the error to an error reporting service
    console.error(errror);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};
```
