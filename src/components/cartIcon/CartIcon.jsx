import { useContext } from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping_bag.svg";
import { cartContext } from "../../useContextHook/CartContextHook.jsx";
import "./CartIcon.scss";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(cartContext);

  const toogleCartDropdown =()=> setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toogleCartDropdown}>
      <ShopIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
