import { combineReducers } from 'redux'
import * as types from './types';
const initialState = {
    token: ''
}

function loginUser(state = initialState, action: any) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload
            }
        case types.LOGOUT_SUCCESS:
                return {
                    ...state,
                    token: action.payload
                }
        
        default:
            return state
    }
}

export default combineReducers({
    loginUser
})