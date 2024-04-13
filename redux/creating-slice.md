# Creating a slice for some particular data

> userSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";
// In this store, we'll model our (user) data. Our user will have a username
// email, password etc.

export const userSlice = createSlice({
  name: "users",
  // This is the name of the state
  initialState: {
    name: "john",
    email: "john@email.com",
  },
  // initialState: {
  //   value: [{ name: "john", email: "john@email.com" }],
  // },
  reducers: {
    // These reducers can be accessed using the sliceName.actions
    update: (state, action) => {
      // The action.payload is the data passed to this reducer function
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer; // This reducer will be imported in the store
```

## Adding more reducers

> userSlice.js

```js
import { createSlice } from "@redux/toolkit";
// In this store, we'll model our (user) data. Our user will have a username
// email, password etc.

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "john",
    email: "john@email.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => {
      state = {};
    },
    add: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});
```

## Another Example
