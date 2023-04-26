import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItemArray, productToAdd) => {
  const exitingItem = cartItemArray.find(
    (productitem) => productitem.id === productToAdd.id
  );

  if (exitingItem) {
    //console.log("matched");
    return cartItemArray.map((productitem) =>
      productitem.id === productToAdd.id
        ? { ...productitem, quantity: productitem.quantity + 1 }
        : productitem
    );
  }

  return [...cartItemArray, { ...productToAdd, quantity: 1 }];
};

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItemArray: [],
  addItemToCart: () => {},
  itemcount: 0,
});

const CartContextHook = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemArray, setCartItemArray] = useState([]);
  const [itemcount, setitemcount] = useState(0);

  useEffect(() => {
    const cartItemCount = cartItemArray.reduce(
      (total, productitem) => total + productitem.quantity,
      0
    );
    setitemcount(cartItemCount);
  }, [cartItemArray]);

  const addItemToCart = (productToAdd) => {
    setCartItemArray(addCartItem(cartItemArray, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItemArray,
    addItemToCart,
    itemcount
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContextHook;
