import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const ProductHeader = () => {
  const totalCount = useSelector((state: RootState) => {
    const cartItems = state.productApi.cartItems;
    return cartItems.reduce(
      (total: number, item: any) => total + item.quantity,
      0,
    );
  });

  return (
    <div
      style={{
        display: "flex",
        fontWeight: "bold",
      }}
    >
      Cart Total Items : {totalCount}
    </div>
  );
};

export default ProductHeader;
