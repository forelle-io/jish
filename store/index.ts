/*
    TODO
    Вынести редьюсеры и экшены в отдельные директории
    Протащить в них методы апи
*/


// import { createStore, applyMiddleware } from 'redux'
import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'

import * as ACTION_TYPES from './types';

const rootInitialState = {
    authToken: '',
    refreshToken: ''
  }
  
  
  export const reducer = (state = rootInitialState, action) => {
    switch (action.type) {
      case ACTION_TYPES.USER_AUTH:
        return Object.assign({}, state, {
          lastUpdate: action.ts,
          light: !!action.light
        })
      default:
        return state
    }
  }
  
  export const getAuthToken = isServer => dispatch => {
    return dispatch({ type: ACTION_TYPES.USER_AUTH, light: !isServer, ts: Date.now() })
  }
  
  export function initializeStore (initialState = rootInitialState) {
    return createStore(
      reducer,
      initialState,
    //   composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }