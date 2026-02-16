import { useDispatch } from "react-redux";
import { products } from "./models/Products";
import {
  addToCart,
  advancedAddToCart,
  advancedRemoveToCart,
  clearCart,
  removeToCart,
} from "./slices/productslice";

export const Products = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid gray", padding: "10px" }}
        >
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => dispatch(advancedAddToCart(product.id))}>
            Add to Cart
          </button>
          <button onClick={() => dispatch(advancedRemoveToCart(product.id))}>
            Remove from Cart
          </button>
        </div>
      ))}

      {/* <button onClick={() => dispatch(addToCart())}>Add to Cart</button>
      <button onClick={() => dispatch(removeToCart())}>Remove from Cart</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button> */}
    </div>
  );
};
