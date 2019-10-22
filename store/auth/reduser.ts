import { combineReducers } from 'redux'
import * as types from './types';

const initialState = {
    token: '',
    isOnline: false
}

function loginUser(state = initialState, action: any) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isOnline: true
            }
        case types.LOGOUT_SUCCESS:
                return {
                    ...state,
                    token: action.payload,
                    isOnline: false
                }
        
        default:
            return state
    }
}

export default combineReducers({
    loginUser
})