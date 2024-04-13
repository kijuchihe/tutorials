# Linking between routes

```jsx
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
```

Asides the above, you can also have links to specific pages like `"/articles/2"`

```jsx
const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      // Notice the method used to pass in parameters
      {article.title}
    </Link>
  );
};
```
