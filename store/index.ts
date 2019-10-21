import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'
import authReducer from './auth/reduser'

const rootInitialState = {}
  
  
  export const reducer = combineReducers({
    authReducer,
  })
  
  
  export function initializeStore (initialState = rootInitialState) {
    return createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }