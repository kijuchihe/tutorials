# TypeScript with react

## PropTypes

```tsx
type GreetProps = {
  name: string;
  age?: string; // This is an optional parameter
  value: "hello" | "why";
  isLoggedIn: boolean;
  greetings: {}[];
  children: React.ReactNode | string;
  styles: React.CSSProperties; //This helps for adding styles and inline-css
};
export const Greet = (props: GreetProps) => {
  return (
    <>
      <div>Hello world</div>
      <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {}}></button>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}} />
    </>
  );
};
```

### Destructuring props

```tsx
type RandomNumberType = {
  value: number;
};
type PositiveNumber = RandomTypeNumber & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomTypeNumber & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type HorizontalPosition = "left" | "center" | "right";
type VericalPosition = "top" | "center" | "bottom";
type PositionProps = {
  position:
    | Exclude<`${HorizontalPosition} - ${VericalPosition}`, "center-center">
    | "center";
};
type GreetProps =
  | {
      name: string;
      age?: string; // This is an optional parameter
      value: "hello" | "why";
      isLoggedIn: boolean;
      greetings: {}[];
      children: React.ReactNode | string;
      styles: React.CSSProperties; //This helps for adding styles and inline-css
      component: React.ComponentType<ComponentProps>;
    }
  | PositiveNumber
  | NegativeNumber;

type ButtonProps = { children: string } & Omit<
  React.ComponentProps<"button">,
  "children"
>;
const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
export const Greet = ({ name, component: Component }: GreetProps) => {
  return (
    <>
      <div>Hello world! {name}</div>
      <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {}}></button>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}} />
      <Component name={"Wow"} />
    </>
  );
};

export const CustomProps = (props: React.ComponentProps<typeof Greet>) => {
  return <div></div>;
};
```

- Destructure props
- Use separate files for your types

### Typing state

```tsx
type GreetProps = {
  name: string;
  age?: string; // This is an optional parameter
  value: "hello" | "why";
  isLoggedIn: boolean;
  greetings: {}[];
  children: React.ReactNode | string;
  styles: React.CSSProperties; //This helps for adding styles and inline-css
};
export const Greet = ({ name }: GreetProps) => {
  const [] = useState<AuthUser | null>(false);
  // or using type assertion
  const [] = useState<AuthUser>({} as AuthUser);
  return (
    <>
      <div>Hello world! {name}</div>
      <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {}}></button>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}} />
    </>
  );
};
```

### Typing the useReducer

```tsx
type CounterState = {
    count: number
}

type UpdateAction = {
    type: "increment": "decrement";
    payload: number;
}
type ResetAction = {
    type: "reset"
}
// Descriminated functions above are used for typing useReducer hook
type CounterAction = {
    type: "increment"| "decrement" | "reset";
    payload: UpdateAction | ResetAction;
}

const initialState = {count: 0}

function reduceer(state, action) {
    switch(action.type) {
        case "increment":
            return {count: state.count + action.payload}
        case "decrement":
            return {count: state.count - action.payload}
        case "reset":
            return {count: 0}
        default:
            return state
    }
}

export const Greet = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
            <button onClick={()=> {return dispatch({type: "increment", payload: 10})}}>Increment 10</button>
            <button onClick={()=> {return dispatch({type: "decrement", payload: 10})}}>Decrement 10</button>
        </>
    )
}
```

### Typing Context API

> In App.tsx

```tsx
import {ThemeContextProvider}

const App = () => {
    <div>
    <ThemeContextProvider>
    <Box/>
    </ThemeContextProvider>
    </div>
}
```

> In Box.tsx

```tsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ backgroundColor: theme.primary }}></div>;
};
```

> ThemeContext.tsx

```tsx
import {createContext} from React

type ThemeContextProviderProps = {
    children: React.ReactNode
}
type ContextType = {
    theme: AuthUser | null;
    setTheme: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
const ThemeContext = createContext<ContextType | null>(theme)

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState()
    return (<ThemeContext.Provider value={{theme, setTheme}}></ThemeContext.Provider>)
}
```

### Polymorphic Component

A polymorphic component is one that can be rendered as different HTML elements

```tsx
type TextOwnProps<E extends React.ElementType> = {
  size: "";
  color: "";
  children: React.ReactNode;
  as: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = "div">({ as }: TextProps<E>) => {
  const Component = as || "div";
  return <Component></Component>;
};
```
