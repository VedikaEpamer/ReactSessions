import React from "react";
import Header from "./Header";
import { Products } from "./Products";
import ProductCartItems from "./ProductCartItems";
import { useDispatch } from "react-redux";
import { products } from "./models/Products";
import { addToCart, clearCart, removeToCart } from "./slices/productslice";

export const AppLayout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header />

      <Products />
      {/* 
      <button onClick={() => dispatch(removeToCart())}>Remove from Cart</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button> */}

      <ProductCartItems />
    </div>
  );
};
