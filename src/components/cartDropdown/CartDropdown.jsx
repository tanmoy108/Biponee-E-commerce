import { useContext } from "react";
import { cartContext } from "../../useContextHook/CartContextHook.jsx";
import CartItem from "../cartItem/CartItem.jsx";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItemArray } = useContext(cartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItemArray.map((productitem) => {
          return <CartItem cartitem={productitem} key={productitem.id} />;
        })}
      </div>
      <button>Checkout</button>
    </div>
  );
};
export default CartDropdown;
