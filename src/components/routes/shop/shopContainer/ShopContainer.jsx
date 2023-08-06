import React from "react";
import { useSelector } from "react-redux"
import Container from "@mui/material/Container";
import ShopPreview from "../shopPreview/ShopPreview.jsx";
import { categorySelector, isLoadingSelectReducer } from "../../../../redux/category/categorySelector";
import CircularProgress from '@mui/material/CircularProgress';

const ShopContainer = () => {
  const category = useSelector(categorySelector)
  const spinnerLoading = useSelector(isLoadingSelectReducer)
  return (
    <Container>
      {
        spinnerLoading ?
          (<div align="center">
            <CircularProgress sx={{ mt: 5 }} /> </div>) :
          (<div>
            {Object.keys(category).map((title, id) => {
              return (
                <ShopPreview key={id} title={title} products={category[title]} />
              );
            })}
          </div>)
      }
    </Container>
  );
};
export default ShopContainer;