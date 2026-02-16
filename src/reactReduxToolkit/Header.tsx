import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { clearCart } from "./slices/productslice";

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.product.count);

  const totalQty = useSelector((state: RootState) => state.product.cartItems);

  const qty = totalQty.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0,
  );

  return (
    <div>
      {/* Cart Count: {count} */}
      <br />
      Total Quantity: {qty}
      <hr />
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <hr />
    </div>
  );
};

export default Header;
