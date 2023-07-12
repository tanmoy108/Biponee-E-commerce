import { CATEGORY_ACTION_TYPES } from "./categoryActionType"

export const setCategory = (categoryMap) => {
  return {
    type: CATEGORY_ACTION_TYPES.SET_CATEGORY,
    payload: categoryMap
  }
}