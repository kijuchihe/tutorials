# Custom Documents

According to the nextjs docs, "A custom `Document` is commonly used to augment
your applications `<html>` and `<body>` tags. This is necessary because Next.js
pages skip the definition surrounding the document's markup"

To override the default `Document`, create the file `./pages/_document.js` and
extend the Document class as shown

```jsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

> Note:
>
> It is only rendered on the server so you can't have clicks or such events on
> it
>
> The `Head` component used above is not the same one from `"next/head"`
>
> The `Head` here should be used for head information common to all pages
>
> Custom attributes like the `lang` can be added to the
