import { createContext, useReducer } from "react";
import {CreateAction} from "../utils/reducer/createAction_utils.js"

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
  total: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItemArray: [],
  itemcount: 0,
  total: 0,
};


export const CART_ACTION_TYPES = {
  EDIT_CART_ITEM: "EDIT_CART_ITEM",
  CART_OPEN:"CART_OPEN"
}

const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.EDIT_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`unhandle type ${type} in CartContextHook`);
  }
};

const CartContextHook = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { isCartOpen, cartItemArray, itemcount, total } = state;

  const UpdateByDispatch = (cartItem) => {
    const cartItemCount = cartItem.reduce(
      (total, productitem) => total + productitem.quantity,
      0
    );
    const totalCount = cartItem.reduce(
      (total, productitem) => total + productitem.quantity * productitem.price,
      0
    );
    dispatch(CreateAction(
      CART_ACTION_TYPES.EDIT_CART_ITEM,
      {
        cartItemArray: cartItem,
        itemcount: cartItemCount,
        total: totalCount,
      },
    ));
  };

  const addItemToCart = (productToAdd) => {
    const newAddCartItem = addCartItem(cartItemArray, productToAdd);
    UpdateByDispatch(newAddCartItem);
  };

  const removeItemFromCart = (removeFromProduct) => {
    const newRemoveCartItem = removeCartItem(cartItemArray, removeFromProduct);
    UpdateByDispatch(newRemoveCartItem);
  };

  const deleteItemFromCart = (deleteFromProduct) => {
    const newDeleteCartItem = deleteCartItem(cartItemArray, deleteFromProduct);
    UpdateByDispatch(newDeleteCartItem);
  };

  // const setIsCartOpen = (bool) => {
  //   dispatch({ type: CART_ACTION_TYPES.CART_OPEN, payload: bool });
  // };
  const setIsCartOpen = (bool) => {
    dispatch(CreateAction(CART_ACTION_TYPES.CART_OPEN,bool));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItemArray,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    itemcount,
    total,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContextHook;
