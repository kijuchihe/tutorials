# React Best Practices

- Use functional components and hooks
- Don't think of components as templates.
- Use typescript
- Don't use `fetch` directly in code
  - State setters compare values based on `===` and for arrays or objects, it compares the references not he actual data.
- use the `useMemo()` and `useCallback()` hooks.
- Make custom hooks
- Don't rush to use redux. You can try using context+hooks+(query_library(e.g. react query))+(form_library(formik, react-hook-form)) else then use redux with redux toolkit.
- You can also try Zustand or Jotai insteadof Redux.
- Use a query library.
- Don't make your own UI library
