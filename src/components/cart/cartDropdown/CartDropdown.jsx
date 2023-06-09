import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../../useContextHook/CartContextHook.jsx";
import CartItem from "../cartItem/CartItem.jsx";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItemArray } = useContext(cartContext);
  const navigate = useNavigate();

  const GoToCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItemArray.map((productitem) => {
          return <CartItem cartitem={productitem} key={productitem.id} />;
        })}
      </div>
      {cartItemArray.length > 0 ? (
        <button onClick={GoToCheckOut}>Checkout</button>
      ) : (
        <button disabled>Checkout</button>
      )}
    </div>
  );
};
export default CartDropdown;
