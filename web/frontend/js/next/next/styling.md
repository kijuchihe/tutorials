# Styling

There are different ways of styling your components which include

- Using styled sheets
- Styled Components (the library)
- Component Styling: Using the `style` tag along with the `jsx` attribute

## Component Styling

```jsx
const Header = () => {
  return (
    <div>
      <h1>
        <span>WebDev</span> Tech
      </h1>
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  );
};
```

```jsx
const Header = () => {
  const x = 5;
  return (
    <div>
      <h1>
        <span>WebDev</span> Tech
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "green"};
          }
        `}
      </style>
    </div>
  );
};
```
