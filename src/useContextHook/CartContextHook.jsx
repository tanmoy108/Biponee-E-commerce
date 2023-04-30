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


const removeCartItem = (cartItemArray, removeFromProduct) => {
  const exitingItem = cartItemArray.find(
    (productitem) => productitem.id === removeFromProduct.id
  );
  if (exitingItem.quantity === 1) {
    return cartItemArray.filter(
      (productitem) => productitem.id !== removeFromProduct.id
    );
  }
  return cartItemArray.map((productitem) =>
    productitem.id === removeFromProduct.id
      ? { ...productitem, quantity: productitem.quantity - 1 }
      : productitem
  );
};

const deleteCartItem = (cartItemArray, deleteFromProduct) => {
  return cartItemArray.filter(
    (productitem) => productitem.id !== deleteFromProduct.id
  );
};


export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItemArray: [],
  addItemToCart: () => {},
  removeItemFroCart: () => [],
  itemcount: 0,
  total:0,
});

const CartContextHook = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemArray, setCartItemArray] = useState([]);
  const [itemcount, setitemcount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartItemCount = cartItemArray.reduce(
      (total, productitem) => total + productitem.quantity,
      0
    );
    const totalCount = cartItemArray.reduce(
      (total, productitem) => total + productitem.quantity*productitem.price,
      0
    );
    setitemcount(cartItemCount);
    setTotal(totalCount);
  }, [cartItemArray]);

  const addItemToCart = (productToAdd) => {
    setCartItemArray(addCartItem(cartItemArray, productToAdd));
  };

  const removeItemFromCart = (removeFromProduct) => {
    setCartItemArray(removeCartItem(cartItemArray, removeFromProduct));
  };

  const deleteItemFromCart = (deleteFromProduct) => {
    setCartItemArray(deleteCartItem(cartItemArray, deleteFromProduct));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItemArray,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    itemcount,
    total
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContextHook;
