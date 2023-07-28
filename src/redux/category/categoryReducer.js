import { CATEGORY_ACTION_TYPES } from "./categoryActionType"

const INITIAL_STATE = {
  category: []
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      }
    default:
      return state
  }
}

export default CategoryReducer;