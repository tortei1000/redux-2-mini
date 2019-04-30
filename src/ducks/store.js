import {createStore, applyMiddleware, combineReducers} from "redux"
import hackerNewsReducer from "./hackerNewsReducer"
import promiseMiddleware from "redux-promise-middleware"
import mediumReducer from "./mediumReducer"

const rootreducer = combineReducers({
  hackerNews: hackerNewsReducer,
  medium: mediumReducer
})

export default createStore(hackerNewsReducer, applyMiddleware(promiseMiddleware))