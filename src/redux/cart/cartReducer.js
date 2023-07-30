import { CART_ACTION_TYPES } from "./cartActionType"

const INITIAL_STATE = {
  isCartOpen: false,
  cartItemArray: [],
  // itemcount: 0,
  // total: 0,
};

const CartReducer = (state = INITIAL_STATE, action={}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.EDIT_CART_ITEM:
      return {
        ...state,
        cartItemArray: payload
      };
    case CART_ACTION_TYPES.CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state
  }
};

export default CartReducer;