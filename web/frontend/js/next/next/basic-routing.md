# Routing

Next comes prebuilt with a routing system.

You can just create a component and save it in the `pages` folder an when you go
to that route in your browser, it opens that component

## Parameters

Now, incase you'll like to have links with parameters, let's say:
`'/articles/3'`, we can do this in next easily

In the pages folder, create an `articles` folder. In the articles folder,
createn a parameter folder with the syntaz `[parameter_name]`. For example if
the parameter is the id, you'll create a folder named `[id]` in the `articles`
directory. In that [id] folder, createn an `index.js`. This index.js will be the
page that will be shown when you navigate to a route like `'/articles/[id]'`
like `'/articles/4'`

### Accessing these parameters

in `"pages/articles/[id]/index.js"`

```jsx
import { useRouter } from "next/router";

const article = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>This is an article</div>;
};
```
