import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../components/cartItems";

const initialState ={
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems = [];
      },
    },
});
  
  export const { clearCart } = cartSlice.actions;

  const ACTION_TYPE = 'ACTION_TYPE';

const actionCreator = (payload) => {
  return { type: ACTION_TYPE, payload: payload };
};

// console.log(cartSlice)
export default cartSlice.reducer