# Using next redux wrapper

```jsx
const store = configureStore({
    reducer: {}
})
export const wrapper = createWrapper(store)
```

```jsx
const App = ({Component, pageProps}) => {
    return <Component {...pageProps}>
}

export default wrapper.withRedux(App)
```

- To make a server side rendered page we export getServerSideProps

```jsx
const OtherPage = (props) => {
    return <div>This is a server side rendered page</div>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => {
    const res = fetch()
    const data = res.json()
    store.dispatch(addUser())
})
```
