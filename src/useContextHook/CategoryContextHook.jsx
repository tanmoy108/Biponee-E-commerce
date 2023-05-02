import React, { createContext, useState, useEffect } from "react";
import { getCollectionAndDocument } from "../utils/firebase/firebase_utils.js";
//import SHOP_DATA from "../json/shop.js";

export const categoryContext = createContext({
  category: {},
});

const CategoryContextHook = ({ children }) => {
  const [category, setCategory] = useState({});
  // useEffect(()=>{
  //   addCollectionAndDocument('categories',SHOP_DATA);
  // },[])

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocument();
      //console.log(categoryMap);
      setCategory(categoryMap);
    };

    getCategoryMap();
  }, []);
  const value = { category };
  return (
    <categoryContext.Provider value={value}>{children}</categoryContext.Provider>
  );
};

export default CategoryContextHook;
