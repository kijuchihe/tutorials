# Dispatching the methods of a reducer

To be able to update the state of the store, we will use a dispatch function

```js
import { useDispatch } from "react-redux";
import { update } from "../userSlice";
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
