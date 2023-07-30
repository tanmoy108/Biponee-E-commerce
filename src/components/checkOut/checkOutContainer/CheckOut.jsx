import CheckOutItem from "../checkOutItem/CheckOutItem.jsx";
import "./CheckOut.scss";
import { useSelector } from "react-redux/es/exports.js";
import { SelectCartItemArray, SelectCartTotalCount } from "../../../redux/cart/cartSelector.js";

const CheckOut = () => {
  const cartItemArray = useSelector(SelectCartItemArray);
  const total = useSelector(SelectCartTotalCount)
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
