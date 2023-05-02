import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductCard from "../productCard/ProductCard.jsx";
import "./ShopPreview.scss";

const ShopPreview = ({ title, products }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>
          <Link to={title} className="shop-preview-title">
            {title.toUpperCase()}
          </Link>
        </h2>
      </Grid>
      {products
        .filter((_, index) => {
          return index < 4;
        })
        .map((product) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard value={product} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default ShopPreview;
