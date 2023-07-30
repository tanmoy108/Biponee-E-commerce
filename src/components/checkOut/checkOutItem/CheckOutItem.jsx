import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from "../../../redux/cart/cartAction"
import "./CheckOutItem.scss";
import { SelectCartItemArray } from "../../../redux/cart/cartSelector";


const CheckOutItem = (props) => {
  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = props.value;
  const cartItemArray = useSelector(SelectCartItemArray);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            dispatch(removeItemFromCart(cartItemArray, props.value));
          }}
        >
          &#10092;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            dispatch(addItemToCart(cartItemArray, props.value));
          }}
        >
          &#10093;
        </div>
      </span>
      <span className="price">${price * quantity}</span>
      <span
        className="remove-button"
        onClick={() => {
          dispatch(deleteItemFromCart(cartItemArray, props.value));
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
