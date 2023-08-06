import { CATEGORY_ACTION_TYPES } from "./categoryActionType"

const INITIAL_STATE = {
  category: [],
  isLoading: false,
  error: null
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      }
    case CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading:false,
        category: payload,
      }
    case CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_ERROR:
      return {
        ...state,
        error: payload,
        isLoading:false
      }
    default:
      return state
  }
}

export default CategoryReducer;