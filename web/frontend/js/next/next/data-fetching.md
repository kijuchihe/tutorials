# Data fetching

There are special functions that can be used to fetch data and pass it into our
props. There are three separate methods that can be used

- getStaticProps: fetch data at build time
- getServerSideProps: fetch data on every request (slower)
- getStaticPaths: to generate paths based on the data we are fetching

## getStaticProps

This function is used to fetch data at build time

```jsx
export const getStaticProps = async (context) => {
  // Although the context is of no use here and can be removed,
  // I just want to explain
  // These functions provided by next can be passed a context property
  // From this we can get information like the id, or whatever is in the url of our current page
  // context.params.id
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default function Home({ articles }) {
  console.log(articles);
  // The articles passed here refer to the articles gotten from the return statement
  // The return statement returned an object with the props object
  // The props object then has the articles which we destructured in the component
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}
```

## getServerSideProps

This will get the data at the time of request is made. For example when you
visit a page, the function will then be called at the request: making page load
slower.

Using this method means you have to run your applications in `lambda` functions

```jsx
import { useRouter } from "next/router";

const article = ({ article }) => {
  return (
    <>
      This is an article of {article.id}
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
```

## getStaticPaths

You can use a combination of getStaticProps and getStaticPaths for dynamically
generating the paths with the data

```jsx
import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      This is an article of {article.id}
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
```

If you run the above code, you will most likely get an error saying
getStaticPaths is required for dynamic site generated pages and is missing for
`/articles/[id]`

```jsx
import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      This is an article of {article.id}
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // Request to get all the data

  const articles = await res.json();
};

// return {
//   paths: {
//     params: { id: "1", id: "2"},
//   },
// };

// We would like to get something like the above
const ids = articles.map((article) => article.id);
const paths = ids.map((id) => ({ params: { id: id.toString() } }));

return {
  paths,
  fallback: false,
};
```
