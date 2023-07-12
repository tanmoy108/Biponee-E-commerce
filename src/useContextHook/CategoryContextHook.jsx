import React, { createContext, useState, useEffect } from "react";
import { getCollectionAndDocument } from "../utils/firebase/firebase_utils.js";

export const categoryContext = createContext({
  category: {},
});

const CategoryContextHook = ({ children }) => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocument();
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
