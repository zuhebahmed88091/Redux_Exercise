import { configureStore } from "@reduxjs/toolkit";
import cartReducer from'./features/carts/cartfile'
export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})