// import { createSelector } from "reselect";

// const selectCategoryReducer = (state) => {
//   console.log("selector 1 fired")
//   console.log(state.categoryKey);//category array
//   return state.categoryKey
// }

// export const selectCategoies = createSelector(
//   [selectCategoryReducer],
//   (categorySlice) => {
//     console.log("selector 2 fired")
//     console.log(categorySlice.categoryKey)
//     return categorySlice.categoryKey
//   }
// )


// export const categorySelector = createSelector(
//   [selectCategoies],
//   (state) =>
//    {
//     console.log("selector 3 fired")
//     console.log("state",state);
//     return state.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       // console.log(acc); //object
//       return acc;
//     }, {})
//    }
// );


//with out reselect
export const categorySelector = (state) => {
  console.log("category selector")
  return state.categoryKey.category.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    // console.log(acc); //object
    return acc;
  }, {});
}