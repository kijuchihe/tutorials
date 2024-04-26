# Solid

- Single Responsibility: Every class should have only one responsibility
  - the `map` function should just return a component
  - When ever you see that you have a useEffect and a useState about the same item, just create a custom hook
- Open-Closed: Open for extension, closed for modification
- Liskov Substitution: subtype objects should be substitutable for supertype objects
  - e.g. SearchInput will be a subtype of the html input element
  - `interface ISearchInputProps extends React.InputHTMLAttributes<HTMLInputElement>`
  - in the input element, `<input {...props}/>`
- Interface Segregation: Clients should not depend on interfaces that they don't use.
  - Components should not depend on props they will not use
- Dependency inversion: One entity should depend upon abstractions not concretions

SOLID principle is used for OOP languages

```ts
// useProducts.ts

import axios from "axios";
import { useEffect, useState } from "react";

export const useProduct = async () => {
  const fetchProducts = () => {
    response = await axios.get("");
    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return { products };
};
```
