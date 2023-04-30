import React, { useContext } from "react";

import { cartContext } from "../../../useContextHook/CartContextHook.jsx";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const { name, imageUrl, price } = props.value;

  const { addItemToCart} = useContext(cartContext);

  const AddItemToCart = () => {
    addItemToCart(props.value);
   // console.log(props.value);
  };
  return (
    <div className="product-container">
      <img src={imageUrl} alt={name} />
      <div className="product-nameButton-context">
        <h4 className="name">{name}</h4>
        <h2 className="price">{price}</h2>
      </div>
      <button className="card-button" onClick={AddItemToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
