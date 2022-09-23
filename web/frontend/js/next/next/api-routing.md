# Sample

```js
export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
```

In the `api` folder, create an `articles` folder and an index.js

> Note that for every function, you will have to create a new file

```js
import { articles } from "../data";
// This is some preset data already written in a file
// but you can use a database or fetch data from another api or something

export default () => {
  res.status(200).json(articles);
};
```

You can get the data from our api by going to `'api/articles/'`

Now we may like to go to `'api/articles/:id'`. To do that we will create an
`[id].js` file in the `api/articles` directory

```js
import { articles } from "../../../data";

export default ({ query }, res) => {
  const { id } = query;
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `article with the id of ${id} is not found` });
  }
};
```
