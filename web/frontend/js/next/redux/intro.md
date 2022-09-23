# Introduction

## Starting

Create a redux folder in the root directory. In that redux folder, create a
`store.js` file and a `userSlice.js` file

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

> store.js

```js
import { configureStore } from "@redux/toolkit";
import userReducer from "./userSlice";
// This is the reducer that was exported from the store

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
```

> in the index.js

```js
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

> To use it in your app

```js
import { useSelector } from "react-redux";

export default function App() {
  const name = useSelector((state) => {
    // This state refers to the store
    // state.user refers to the user reducer in the store
    // state.user.name refers to the name in the state (initialState) of the user reducer
    state.user.name;
  });
  const user = useSelector((state) => {
    state.user;
  });
  //   user.name, user.email;
}
```

To be able to update the state of the store, we will use a dispatch function

```js
import { useDispatch } from "react-redux";
import { update } from "../useSlice";
const Update = () => {
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({ name, email }));
  };
  return (
    <form>
      <input />
      <input type="password" />
    </form>
  );
};
```

## Advantages

- If you have an email and a username for a user and maybe only the username is
  used in the navbar, the only time the navbar will rerender is if the name of
  the state changes. It won't rerender even if other data about the state (like
  the email) is changed

## creating more reducers

> userSlice.js

```js
import { createSlice } from "@redux/toolkit";
// In this store, we'll model our (user) data. Our user will have a username
// email, password etc.

export const userSlice = createSlice({
  name: "Jser",
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

## Using it with apis

```js
import { createSlice } from "@redux/toolkit";
// In this store, we'll model our (user) data. Our user will have a username
// email, password etc.

export const userSlice = createSlice({
  name: "user",
  //   This is the name of the state
  initialState: {
    userInfo: {
      name: "john",
      email: "john@email.com",
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});
```

> apiCalls.js

```js
import { updateStart, uploadSuccess, updateError } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("http://localhost:3000/api/users/123/update");
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};
```

```js
import { createAsyncThunk, createSlice } from "@redux/toolkit";
import axios from "axios";
// In this store, we'll model our (user) data. Our user will have a username
// email, password etc.
export const updateUser2 = createAsyncThunk("users/update", async () => {
  const res = await axios.post(
    "http://localhost:5000/api/users/1/update",
    user
  );
  return res.data;
});
export const userSlice = createSlice({
  name: "user",
  //   This is the name of the state
  initialState: {
    userInfo: {
      name: "john",
      email: "john@email.com",
    },
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updateUser2.error]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});
```
