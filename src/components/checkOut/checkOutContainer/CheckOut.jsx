import { useContext } from "react";
import { cartContext } from "../../../useContextHook/CartContextHook.jsx";
import CheckOutItem from "../checkOutItem/CheckOutItem.jsx";
import "./CheckOut.scss";

const CheckOut = () => {
  const { cartItemArray, total } = useContext(cartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItemArray.map((productitem) => {
        return <CheckOutItem key={productitem.id} value={productitem} />;
      })}
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default CheckOut;
