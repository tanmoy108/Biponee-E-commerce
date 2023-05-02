import React, { useContext } from "react";
import Container from "@mui/material/Container";
import { categoryContext } from "../../../../useContextHook/CategoryContextHook";
import ShopPreview from "../shopPreview/ShopPreview.jsx";
// import "./ShopContainer.scss";

const ShopContainer = () => {
  const { category } = useContext(categoryContext);
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