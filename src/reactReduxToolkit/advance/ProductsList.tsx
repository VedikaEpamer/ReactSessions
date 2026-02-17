import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../store";
import {
  advanceAddToCart,
  advanceClearCart,
  advanceRemoveFromCart,
  productGetApiProduct,
} from "../slices/productApiSlice";

const ProductsList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(productGetApiProduct());
  }, [dispatch]);

  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.productApi,
  );

  return (
    <div>
      <div>
        <button onClick={() => dispatch(advanceClearCart())}>
          Clear Cart{" "}
        </button>
      </div>
      {isLoading && <p>Loading products...</p>}
      {error && <p>Error: {error}</p>}
      {products &&
        products.map((product: any) => (
          <div
            key={product.id}
            style={{
              border: "1px solid",
              margin: "5px",
              maxWidth: "500px",
              padding: "5px",
            }}
          >
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(advanceAddToCart(product.id))}>
              Add to Cart{" "}
            </button>
            <button onClick={() => dispatch(advanceRemoveFromCart(product.id))}>
              Remove from Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductsList;
