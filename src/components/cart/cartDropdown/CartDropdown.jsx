import { useNavigate } from "react-router-dom";
import CartItem from "../cartItem/CartItem.jsx";
import { useSelector } from "react-redux";
import { SelectCartItemArray } from "../../../redux/cart/cartSelector.js";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const cartItemArray = useSelector(SelectCartItemArray);
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
