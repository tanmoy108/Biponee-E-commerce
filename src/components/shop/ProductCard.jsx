import React from 'react';
import "./ProductCard.scss";

const ProductCard = (props) => {
  const {name,imageUrl,price} = props.value;
  return (
    <div className="product-container">
      <img src={imageUrl} alt={name} />
      <div className='product-nameButton-context'>
      <h4 className='name'>{name}</h4>
      <h2 className='price'>{price}</h2>
      </div>
      <button className='card-button'>Add to Cart</button>
    </div>
  );

}

export default ProductCard;