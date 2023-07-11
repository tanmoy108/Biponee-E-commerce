import {createStore, compose, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import {rootReducer} from "./rootReducer.js"

const middlwares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlwares))

export const store = createStore(rootReducer, undefined, composedEnhancers)