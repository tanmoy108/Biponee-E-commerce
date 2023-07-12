import { combineReducers } from "redux"
import UserReducer from "./user/userReducer"
import CategoryReducer from "./category/categoryReducer"
export const rootReducer = combineReducers({
  user: UserReducer,
  category: CategoryReducer
})