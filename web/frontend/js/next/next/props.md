# Props

## Default Props

```js
export default Component = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

Component.defaultProps = {
  title: "Hello world",
};
```

Using typescript,

```ts
import type { GetStaticProps, NextPage } from "next"
export default Component:NextPage = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

Component.defaultProps = {
  title: "Hello world",
};
```
