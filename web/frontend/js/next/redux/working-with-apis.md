# Using Redux With Apis

```js
import { createSlice } from "@redux/toolkit";

export const userSlice = createSlice({
  name: "user",
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
      state.userInfo.name = action.payload.name;
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

## Using the `createAsyncThunk` Provided by `"@reduxjs/toolkit"`

---

The createAsyncThunk provides states for getting data.

If we create a function called myFunc like this:

```js
const myFunc = createAsyncThunk();
```

That `myFunc` is going to return data like

- `myFunc.pending`
- `myFunc.fulfilled`
- `myFunc.error`

These can then be used in the state

```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async () => {
  const res = await axios.post(
    "http://localhost:5000/api/users/1/update",
    user
  );
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
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
