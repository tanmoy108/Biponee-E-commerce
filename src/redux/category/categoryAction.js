import { CATEGORY_ACTION_TYPES } from "./categoryActionType"
import { CreateAction } from "../../utils/reducer/createAction_utils"

export const setCategory = (categoryArray) => CreateAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, categoryArray)
