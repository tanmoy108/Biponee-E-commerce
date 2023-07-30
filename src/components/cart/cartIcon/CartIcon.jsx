import { useSelector,useDispatch } from "react-redux";
import { ReactComponent as ShopIcon } from "../../../assets/shopping_bag.svg";
import { setIsCartOpen } from "../../../redux/cart/cartAction";
import { SelectIsCartOpen, SelectCartItemCount } from "../../../redux/cart/cartSelector";
import "./CartIcon.scss";
const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(SelectIsCartOpen);
  const itemcount = useSelector(SelectCartItemCount);

  const toogleCartDropdown = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <div className="cart-icon-container" onClick={toogleCartDropdown}>
      <ShopIcon className="shopping-icon" />
      <span className="item-count">{itemcount}</span>
    </div>
  );
};

export default CartIcon;
