import { useContext } from "react";
import { cartContext } from "../../../useContextHook/CartContextHook.jsx";
import "./CheckOutItem.scss";

const CheckOutItem = (props) => {
  const { name, imageUrl, quantity, price } = props.value;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(cartContext);
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
            removeItemFromCart(props.value);
          }}
        >
          &#10092;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItemToCart(props.value);
          }}
        >
          &#10093;
        </div>
      </span>
      <span className="price">${price * quantity}</span>
      <span
        className="remove-button"
        onClick={() => {
          deleteItemFromCart(props.value);
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
