# Metadata

1. Static metadata
2. Dynamix metadata

```js
export const metadata = {
    title: "Home"
}

export default Page (){
    return (
        <h1>My normal next.js page with static metadata</h1>
    )
}
```

For dynamic metadata

```js
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);

  return {
    title: product.title,
  };
}

export default function Page() {
  return <h1>My normal next.js page with dynamix metadata</h1>;
}
```
