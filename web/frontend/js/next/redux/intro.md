# Introduction

## Starting

Create a redux folder in the root directory. In that redux folder, create a
`store.js` file and a `userSlice.js` file

## Steps

- Create a store
- Create slices:
  - Slices are the different components of the global state
  - A userSlice might be to manage the current user of the app
  - `import { createSlice } from "@reduxjs/toolkit;`
  - I would suggest that each slice should be in a separate file
  - Create a name for the slice or component
    - `export const userSlice = createSlice({name: users})`
  - Create an initial state for the slice
    - `export const userSlice = createSlice({ name: users, initialState: { value: data } })`
  - Create reducers for that slice:
    - Reducers are to be added to the createSlice function options
    - Reducers are the functions that can be carried out by the reducers
    - These functions can be passed the `state` and the `action`
    - This state object has access to the initial state or the structure of the
      state (which depends on the initial state). Whenever the `state` is passed
      into a **_`slice reducer`_**, you are accessing the data of the
      `initialState`
    - `reducers: { update: (state, action)=>{ state.value = action.payload.data } }`
    - The action.payload refers to the data passed into the reducer function.
    - For example, if I pass in the data like this:
      - `update({ value })`
      - Accessing the value when creating that reducer will be like:
      - `action.payload.value`
    - The above reducers contains only an update method
  - Export the slice reducers which can be accessed from the `slice.actions`
    - `export const { update } = userSlice.actions`
  - Export the slice main reducer:
    - `export default userSlice.reducer`
- Make the state manager a global component and making accessible to the
  components you want:
  - If you want it accessible in the whole app, you wrap it around the `<App/>`
    or highest component
  - Import the created store into your component (in this case, the App
    component)
  - `import store from "./redux/store"`
  - `import {Provider} from "react-redux";`
  - `ReactDOM.render( <Provider store={store}> <App /> </Provider>, document.getElementById("root") );`
- You can access this global state using the useSelector hook provided from
  "react-redux"
  - `const user = useSelector((state) => { state.user });`
  - This `state` object in this case is the global state object which refers to
    `store.reducer`
  - `state => store.reducer`
- To run a slice reducer, we have to use the `useDispatch` method (also provided
  by the "react-redux" library)
  - dispatch = useDispatch()
  - `import { useDispatch } from "react-redux";`
  - `import { update } from "../userSlice";` -- This is the function we want to
    dispatch
  - `const dispatch = useDispatch();`
  - `const handleUpdate = (e) => { e.preventDefault(); dispatch(update({ name, email })); };`

## Advantages

- If you have an email and a username for a user and maybe only the username is
  used in the navbar, the only time the navbar will rerender is if the name of
  the state changes. It won't rerender even if other data about the state (like
  the email) is changed
