import { createSlice } from "@reduxjs/toolkit";
import { products } from "../models/Products";

const initialState = {
  count: 0,

  cartItems: [] as {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addToCart: (state) => {
      state.count += 1;
    },
    advancedAddToCart: (state, action) => {
      const productId = action.payload;
      if (state.cartItems.some((item) => item.id === productId)) {
        //code pending
        state.cartItems = state.cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        const product = products.find((p) => p.id === productId);
        state.cartItems.push({
          id: productId,
          name: product ? product.name : "Unknown Product",
          price: product ? product.price : 0,
          quantity: 1,
        });
      }
    },
    removeToCart: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    advancedRemoveToCart: (state, action) => {
      const productId = action.payload;
      const product = state.cartItems.find((item) => item.id === productId);
      if (product) {
        if (product.quantity > 1) {
          state.cartItems = state.cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== productId,
          );
        }
      } else {
        return;
      }
    },
    clearCart: (state) => {
      state.count = 0;
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  advancedAddToCart,
  removeToCart,
  advancedRemoveToCart,
  clearCart,
} = productSlice.actions;
export default productSlice.reducer;
