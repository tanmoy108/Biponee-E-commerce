import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { cartContext } from "../../../../useContextHook/CartContextHook.jsx";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const { name, imageUrl, price } = props.value;

  const { addItemToCart} = useContext(cartContext);

  const AddItemToCart = () => {
    addItemToCart(props.value);
  };
  return (
    <div className="product-container">
      <img src={imageUrl} alt={name} />
      <div className="product-nameButton-context">
        <Typography variant="h6" component="h1" className="name">
          {name}
        </Typography>
        <Typography variant="caption" component="h3" className="subtitle">
          It is a long established fact that a reader will be distracted.
        </Typography>
        <Typography variant="h1" component="h2" className="price">
          ${price}
        </Typography>
      </div>
      <button className="card-button" onClick={AddItemToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
