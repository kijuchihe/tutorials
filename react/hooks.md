# React Hooks

1. Hooks should be called at the top level of a functional component and not inside a js function. The only exception to this is the custom hooks.

```ts
const Component = () => {
  useHook();

  // This function when called, will cause an error
  const func = () => {
    useHook();
  };
};
```

- useState(): This is called when data changes in the application and you want to re-render the UI on change.

```ts
const Component = () => {
  const [count, setCount] = useState(0);

  // count is the reactive data
  // setCount s the setter function
  // 0 is the optional initial parameter
};
```

- useEffect(): To understand, you need to understand the component lifecycle/ sideevents
  - componentDidMount()
  - componentDidUpdate()
  - componentWillUnmount()
  - It is passed a function, and a dependecy array. If the component is to be torn down, we return

```ts
// ComponentDidMount
// & componentDidUpdate as the useEffect will be called anytime the state changes
useEffect(() => {
  alert("Hello side effect");
});

//This has problems and therefore we will like to control what is being run when a specific state changes
useEffect(() => {
  fetch("foo").then(() => setLoaded(true));
}, []);
// The dependency array will tell when the useEffect should run when a particular state changes
// If empty, it will run only once and when any state changes, it will run

useEffect(() => {
  fetch("foo").then(() => setLoaded(true));
}, [count]);

useEffect(() => {
  return () => alert("goodbye component");
});
```

- useContext(): Allows you to work with react's context api
- useRef(): This allows you to create a mutable object and keep the same reference between renders it can be used when we have a value that changes kind of like set state but it doesn't trigger a re-render UI. e.g.
  - For example, if you use useRef hook, to build a counter, the counter value will increment but it wont be displayed on the screen because it does not cause a re-render.
  - It is more used to grab native HTML elements from JSX

```ts
function App() {
  const myBtn = useRef(null);

  const clickIt = () => myBtn.current.click();
  // This will programatically click the button

  return <button ref={myBtn}> </button>;
}
```

- useReducer(): This is quite similar to setState as it is a different way to manage state but goes about it a different way, like redux
  - Action -> Reducer -> Store -> UI -> Action

```ts
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

- useMemo(): This is used to cache the result of a function call (memoisation). It is used to optimise computation costs. You don't want to prematurely optimise performance. So think of this tool as an opt in tool to deal with computations that you know are hurting performance.

> The first reason you'll use Memo is when you are computing arrays or objects

> If you are doing calculations which may be expensive

```ts
function App() {
  const [count, setCount] = useState(60);

  const expensiveCount = useMemo(() => {
    return count ** 2;
  }, [count]);

  // the dependency array tells react that the function should be called when count changes
}
```

```ts
// This is calculating a number so it doesn't fall into our category of arrays becayse the calculation is a number

// However, the calculation might be costly because we don't know the number of cossts are there and the calculation is therefore expensive.

const total = useMemo(() => {
  costs.reduce((a, c) => a + c, 0);
}, [costs]);
```

```ts
// A sort is potentially expensive
const sortedPeople = useMemo(() => {
  [...people.sort()];
}, [people]);
```

- useCallback(): This is used to memoize a whole function. When you create a function in a component, a new function object is created whenever the component is rerendered. Usually this isn't a big deal for performance but sometimes you might want to memoise the function. A typical use case is when you pass a function to multiple child components (especially with big lists). By rapping the component in a useCallback hook, you can prevent the unnecessary rerender of the component because they'll always be using the same function object.

Use cases

> You want to keep your callback from being stale

> You want to retain the referential identiy of the callback

```ts
function App() {
  const [count, setCount] = useState(0);

  const showCount = () => {
    alert(`Count ${count}`);
  };

  return (
    <>
      <SomeChild />
    </>
  );
}
```

```tsx
const NameList= () => {
  const sortedNames = useMemo(()=>{},[])

  return (
    <div>
    {sortedNames.map(...)}
    </div>
  )
}

```

```tsx
const sortFunc = useCallback((a, b) => {
  // ...
}, [])

<Namelist names={names} sortFunc={sortFunc}/>
```

- useImperativeHandle(): If you build a reusable component library in react, you may need to get access to the underlying dom elements and then forward it so it can be accessed by the consumers of your component library. You can access a native dom element with the useRef hook

```ts
function App() {
  const ref = useRef(null);

  return <CoolButton ref={ref}></CoolButton>; // The ref that was exposed
}

function CoolButton() {
  const myBtn = useRef(null);

  // If you wan to change the behaviour of the exposed ref (the one you expose through the forwardRef)
  // This is however rare
  useImperativeHandle(ref, () => ({
    click: () => {
      console.log("Clicking the button!");
      myBtn.current.click();
    },
  }));

  return <button ref={myBtn}></button>;
}

CoolButton = forwardRef(CoolButton);
```

- useLayoutEffect(): This works just like the use effect but it runs after render but before painting to the screen. This means in blocks visual updates until your callback is finished. This is useful if you want to calculate the scroll position or something else in the UI before the page is rendered

```ts

```

- useDebugValue(): This won't make a lot of sense until you start building your own hooks from scratch

```ts
function App() {
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    const data = fetchFromDatabase(props.userId);
    setDisplayName(data.displayName);
  }, []);
  return <button>{displayName}</button>;
}
```

With customHooks

```ts
useDisplayName = () => {
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    const data = fetchFromDatabase(props.userId);
    setDisplayName(data.displayName);
  }, []);

  useDebugValue(displayName ?? "loading..."); // This is what will be passed to the react-dev-tools
  return { displayName };
};

function App() {
  const { displayName } = useDisplayName();

  return <button>{displayName}</button>;
}
```
