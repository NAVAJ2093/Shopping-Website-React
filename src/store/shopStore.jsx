import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const shopStore = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default shopStore;
