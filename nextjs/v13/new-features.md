# New Features in Next.js

- All the components within the app folder are by default server side rendered

```js
"use client";
```

When ever using useState or useEffect or any hooks, you need to add that
`use client` directive on top

By default the components are server side and you'll want to continue with that
until you need to use state or onChange or something like that.
