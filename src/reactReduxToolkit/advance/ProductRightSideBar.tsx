import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { productAddApiProduct } from "../slices/productApiSlice";

const ProductRightSideBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddProduct = () => {
    dispatch(productAddApiProduct({ title, description, price }));
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>Add Products</div>
      <hr />
      Title :{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      Description :{" "}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      Price :{" "}
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <br />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductRightSideBar;
