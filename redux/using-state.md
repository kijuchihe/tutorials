# Using the global state in our app

> To use it in your app

```js
import { useSelector } from "react-redux";

export default function App() {
  const name = useSelector((state) => {
    // This state refers to the store.reducer
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
