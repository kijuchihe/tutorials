# Some code examples

> components/Layout.jsx

```jsx
import styles from "../styles/Layout.module.css";
// The styles object will have all the classes as properties and
// Therefore can be accessed with the dot notation

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <>{children}</>
      </main>
    </div>
  );
};
```

> \_app.js

```jsx
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
```
