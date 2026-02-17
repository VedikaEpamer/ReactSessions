import React, { use } from "react";
import { useSelector } from "react-redux";

const ProductLeftSideBar = () => {
  const cartItems = useSelector((state: any) => state.productApi.cartItems);
  return (
    <div>
      {cartItems.map((item: any) => (
        <div
          key={item.id}
          style={{ border: "1px solid", margin: "5px", padding: "5px" }}
        >
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductLeftSideBar;
