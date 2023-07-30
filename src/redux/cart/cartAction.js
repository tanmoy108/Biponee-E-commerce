import { CART_ACTION_TYPES } from "./cartActionType"
import { CreateAction } from "../../utils/reducer/createAction_utils"

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

//-------------------------------------------------------------------------
export const setIsCartOpen = (bool) => CreateAction(CART_ACTION_TYPES.CART_OPEN, bool)

export const addItemToCart = (cartItemArray, productToAdd) => {
  const newAddCartItem = addCartItem(cartItemArray, productToAdd);
  return CreateAction(CART_ACTION_TYPES.EDIT_CART_ITEM, newAddCartItem)
};

export const removeItemFromCart = (cartItemArray, removeFromProduct) => {
  const newRemoveCartItem = removeCartItem(cartItemArray, removeFromProduct);
  return CreateAction(CART_ACTION_TYPES.EDIT_CART_ITEM, newRemoveCartItem);
};

export const deleteItemFromCart = (cartItemArray, deleteFromProduct) => {
  const newDeleteCartItem = deleteCartItem(cartItemArray, deleteFromProduct);
  return CreateAction(CART_ACTION_TYPES.EDIT_CART_ITEM, newDeleteCartItem);
};