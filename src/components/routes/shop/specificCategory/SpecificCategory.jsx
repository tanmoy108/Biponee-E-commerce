import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import ProductCard from "../productCard/ProductCard";
import "./SpecificCategory.scss";
import { categorySelector, isLoadingSelectReducer } from "../../../../redux/category/categorySelector";
import CircularProgress from '@mui/material/CircularProgress';

const SpecifiCategory = () => {
  const { categoryName } = useParams();
  // console.log("rendering SpecificCategory");
  const category = useSelector(categorySelector)
  // console.log(category) // object
  const spinnerLoading = useSelector(isLoadingSelectReducer)
  const [specificProduct, setSpecificProduct] = useState(
    category[categoryName]
  );

  useEffect(() => {
    // console.log("useEffect Fired setSpecificProduct")
    setSpecificProduct(category[categoryName]);
    // console.log(specificProduct) //array
  }, [categoryName, category]);
  return (
    <Container>
      {
        spinnerLoading ?
          (<div align="center">
            <CircularProgress sx={{ mt: 5 }} /> </div>) :
          (<Grid container spacing={2}>
            <Grid item xs={12}>
              <h2 className="specific-header">
                <span className="specific-title">
                  {specificProduct && categoryName.toUpperCase()}
                </span>
              </h2>
            </Grid>
            {specificProduct &&
              specificProduct.map((product) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={product.id}>
                    <ProductCard value={product} />
                  </Grid>
                );
              })}
          </Grid>)
      }
    </Container>
  );
};

export default SpecifiCategory;
