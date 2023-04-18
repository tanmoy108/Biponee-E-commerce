import React from 'react';
import { Container } from "@mui/material";
import CardBodyContainer from "../card/CardBodyContainer.jsx";
import category from "../json/category.json";
import {Fragment} from 'react';

const Home = () => {
  return (
    <Fragment>
      <Container>
        <CardBodyContainer category={category} />
      </Container>
    </Fragment>
  );
}

export default Home