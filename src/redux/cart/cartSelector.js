import { createSelector } from "reselect";

const SelectCartReducer = state => state.cartKey; // rottreducer key

export const SelectCartItemArray = createSelector([SelectCartReducer], (cartSlice) => cartSlice.cartItemArray) // cart array | state value
export const SelectIsCartOpen = createSelector([SelectCartReducer], (dropDownSlice) => dropDownSlice.isCartOpen)

export const SelectCartItemCount = createSelector([SelectCartItemArray], (cartItemArray) => cartItemArray.reduce(
  (total, productitem) => total + productitem.quantity,
  0
))

export const SelectCartTotalCount = createSelector([SelectCartItemArray], (cartItemArray) => cartItemArray.reduce(
  (total, productitem) => total + productitem.quantity * productitem.price,
  0
))
