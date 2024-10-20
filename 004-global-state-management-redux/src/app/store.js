import { configureStore } from "@reduxjs/toolkit"
import {
  counterSlice,
  increment,
  decrement,
} from "../features/counter/counterSlice.js"

const store = configureStore({
  reducer: counterSlice.reducer,
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(increment())
// {value: 1}
store.dispatch(increment())
// {value: 2}
store.dispatch(decrement())
// {value: 1}

export default store
