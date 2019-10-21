// import { combineRedusers } from 'redux'

const initialState = {
    token: ''
}

export default function reduce(state = initialState, action: any = {}) {
    switch (action.type) {
        case 'SUCCESSFUL_LOGIN':
            return {...state, token: action.token}
        default:
            return state;
    }
}