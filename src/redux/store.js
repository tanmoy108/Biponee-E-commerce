import { createStore, compose, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { rootReducer } from "./rootReducer.js"

//own middleware
// const reduxLogger = (store) => (next) => (action) => {
//   if (!action.type)
//     return next(action);

//   console.log("action type = ", action.type)
//   console.log("action payload = ", action.payload)
//   console.log("current state = ", store.getState()) //old state

//   next(action)
//   console.log("next state = ", store.getState()) // new state
// }
// const middlwares = [reduxLogger];



const middlwares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlwares))

export const store = createStore(rootReducer, undefined, composedEnhancers)