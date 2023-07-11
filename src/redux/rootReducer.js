import {combineReducers} from "redux"
import UserReducer from "./user/userReducer"
export const rootReducer = combineReducers({
  user : UserReducer,
})