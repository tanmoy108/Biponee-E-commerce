import { CATEGORY_ACTION_TYPES } from "./categoryActionType"
import { CreateAction } from "../../utils/reducer/createAction_utils"
import { getCollectionAndDocument } from "../../utils/firebase/firebase_utils";

// export const setCategory = (categoryArray) => CreateAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, categoryArray)

export const fetchCategoryStart = () => CreateAction(CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_START)
export const fetchCategorySuccess = (categoryArray) => CreateAction(CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_SUCCESS, categoryArray)
export const fetchCategoryError= (error) => CreateAction(CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_ERROR, error)


export const fetchCategoryAsync = async (dispatch) => {
  dispatch(fetchCategoryStart())

  try {
    const categoryArray = await getCollectionAndDocument();
    // console.log(categoryArray) //array
    dispatch(fetchCategorySuccess(categoryArray));

  } catch (error) {
    dispatch(fetchCategoryError(error))
  }
}
