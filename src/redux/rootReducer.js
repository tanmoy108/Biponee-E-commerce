import { combineReducers } from "redux"
import UserReducer from "./user/userReducer"
import CategoryReducer from "./category/categoryReducer"
import CartReducer from "./cart/cartReducer"
export const rootReducer = combineReducers({
  userKey: UserReducer,
  categoryKey: CategoryReducer,
  cartKey: CartReducer
})