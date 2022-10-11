# Explanations

## Creating a store

We have to create a store and initialize it. The store is our storage place

> store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// This is the reducer that was exported from the userSlice

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
```

> store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// This is the reducer that was exported from the store

export default configureStore({
  reducer: {
    // This reducer object actually has all the reducers for the app
    user: userReducer,
  },
});
```
