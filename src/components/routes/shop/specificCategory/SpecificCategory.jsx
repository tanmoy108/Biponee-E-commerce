import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { categoryContext } from "../../../../useContextHook/CategoryContextHook";
import ProductCard from "../productCard/ProductCard";
import "./SpecificCategory.scss";

const SpecifiCategory = () => {
  const { categoryName } = useParams();
  const { category } = useContext(categoryContext);
  const [specificProduct, setSpecificProduct] = useState(
    category[categoryName]
  );

  useEffect(() => {
    setSpecificProduct(category[categoryName]);
  }, [category, specificProduct]);
  return (
    <Container>
      <Grid container spacing={2}>
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
      </Grid>
    </Container>
  );
};

export default SpecifiCategory;
