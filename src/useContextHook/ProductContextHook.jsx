import React, {createContext,useState} from 'react';
import PRODUCT from "../json/shop.json";


export const productContext = createContext(
  {
    products : [],
  }
)

const ProductContextHook = ({children}) => {
  const [products,setproducts] = useState(PRODUCT);
  const value = {products,setproducts};
  return(
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContextHook;