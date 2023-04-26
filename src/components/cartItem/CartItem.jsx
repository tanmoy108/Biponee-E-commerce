import "./CartItem.scss";

const CartItem = (props) => {
  const { name, imageUrl, price, quantity } = props.cartitem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`img-${name}`} />
      <div className="text-container">
        <h2>{name}</h2>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
