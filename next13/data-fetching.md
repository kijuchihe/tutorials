# Data Fetching

When fetching data there are three things

1. Server Side Rendering (SSR)
2. Static Site Generation (SSG)
3. Incremental Static Generation (ISR)

```jsx
// In this, the data is fetched

async function Page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-store" }
    // This doesn't store the cache
    // This is used when the content changes frequently
  );
  const data = await res.json();

  return <div>{data.title}</div>;
}
```

For static site generation

```jsx
// In this, the data is fetched

async function Page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();

  return <div>{data.title}</div>;
}
```

For Incremental Static Generation

```jsx
// In this, the data is fetched

async function Page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  return <div>{data.title}</div>;
}
```
