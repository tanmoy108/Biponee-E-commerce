import React, { useContext } from "react";
import { productContext } from "../../../useContextHook/ProductContextHook";
import ProductCard from "./ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(productContext);
  return (
    <div className="product-body-container">
      {products.map((value) => {
        const { id } = value;
        return <ProductCard key={id} value={value} />;
      })}
    </div>
  );
};

export default Shop;
