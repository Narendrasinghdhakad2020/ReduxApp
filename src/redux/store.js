import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import CartSlice from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    cart: CartSlice,
  },
});
export default store;
