import React from "react";
import { useSelector } from "react-redux"
import Container from "@mui/material/Container";
import ShopPreview from "../shopPreview/ShopPreview.jsx";
import { categorySelector } from "../../../../redux/category/categorySelector";

const ShopContainer = () => {
  const category = useSelector(categorySelector)
  return (
    <Container>
      <div>
        {Object.keys(category).map((title, id) => {
          return (
            <ShopPreview key={id} title={title} products={category[title]} />
          );
        })}
      </div>
    </Container>
  );
};

export default ShopContainer;