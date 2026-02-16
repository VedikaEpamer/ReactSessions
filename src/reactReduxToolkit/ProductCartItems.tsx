import { useSelector } from "react-redux";
import type { RootState } from "./store";

const ProductCartItems = () => {
  const productCartItems = useSelector(
    (state: RootState) => state.product.cartItems,
  );

  return (
    <div>
      ProductCartItems
      <hr />
      {productCartItems.map((product: any) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
      <br />
    </div>
  );
};

export default ProductCartItems;
