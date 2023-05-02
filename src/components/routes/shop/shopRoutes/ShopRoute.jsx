import React from "react";
import {Routes,Route} from "react-router-dom";
import ShopContainer from "../shopContainer/ShopContainer.jsx";
import SpecificCategory from "../specificCategory/SpecificCategory.jsx";

const ShopRoute = () => {
  return (
    <Routes>
      <Route index element={<ShopContainer/>}/>
      <Route path=":categoryName" element={<SpecificCategory/>}/>
    </Routes>
  );
};

export default ShopRoute;
