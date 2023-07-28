import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getCollectionAndDocument } from "../../../../utils/firebase/firebase_utils.js";
import { setCategory } from "../../../../redux/category/categoryAction";
import { Routes, Route } from "react-router-dom";
import ShopContainer from "../shopContainer/ShopContainer.jsx";
import SpecificCategory from "../specificCategory/SpecificCategory.jsx";

const ShopRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryArray = async () => {
      const categoryArray = await getCollectionAndDocument();
      // console.log(categoryArray) //array
      dispatch(setCategory(categoryArray));
    };
    getCategoryArray();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<ShopContainer />} />
      <Route path=":categoryName" element={<SpecificCategory />} />
    </Routes>
  );
};

export default ShopRoute;
