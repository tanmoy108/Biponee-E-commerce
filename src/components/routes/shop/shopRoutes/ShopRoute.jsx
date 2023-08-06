import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchCategoryAsync } from "../../../../redux/category/categoryAction";
import { Routes, Route } from "react-router-dom";
import ShopContainer from "../shopContainer/ShopContainer.jsx";
import SpecificCategory from "../specificCategory/SpecificCategory.jsx";

const ShopRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryAsync);
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<ShopContainer />} />
      <Route path=":categoryName" element={<SpecificCategory />} />
    </Routes>
  );
};

export default ShopRoute;
