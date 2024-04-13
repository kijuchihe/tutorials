# Using TypeScript with Redux

## Creating store

```tsx
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export defaullt store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

### In a new file `hooks.ts`

```tsx
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import type {RootState, AppDispatch} from "./store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
```

## Creating slice

```tsx
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    name: string | null
}

const initialState = {
    name: "Kingsley"
}

export const userSlice = createSlice({
    name: "userState",
    initialState,
    reducers: {
        createUser: (state, action:PayloadAction<number>) => {
            state.name = action.payload.name
        },
    }
})

const {update} = userSlice.actions
export default userSlice.reducer
```


