import { takeLatest, all, call, put} from "redux-saga/effects";
import { CATEGORY_ACTION_TYPES } from "./categoryActionType";
import { getCollectionAndDocument } from "../../utils/firebase/firebase_utils";
import { fetchCategorySuccess, fetchCategoryError } from "./categoryAction";

export function* fetchCategoryAsync() {
  try {
    const categoryArray = yield call(getCollectionAndDocument);
    yield put(fetchCategorySuccess(categoryArray));
  } catch (error) {
    yield put(fetchCategoryError(error))
  }
}

export function* cagtegoriesTake() {
  console.warn("hello baby")
  yield takeLatest(CATEGORY_ACTION_TYPES.ASYNC_CATEGORY_START, fetchCategoryAsync)
}

export function* categorySaga() {
  yield all([call(cagtegoriesTake)])
}