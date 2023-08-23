import { CATEGORY_ACTION_TYPES } from "./categoryActionType"
import { CreateAction } from "../../utils/reducer/createAction_utils"

export const fetchCategoryStart = () =>
{
  console.log("action.......")
  return CreateAction(CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_START)
}
export const fetchCategorySuccess = (categoryArray) => CreateAction(CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_SUCCESS, categoryArray)
export const fetchCategoryError= (error) => CreateAction(CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_ERROR, error)

