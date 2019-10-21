import * as types from './types';

export function loginError(errorObj) {
    return {
        type: types.LOGIN_ERROR,
        payload: errorObj
    }
}

export function loginSuccess(loginData) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: loginData
    }
}

export function logoutError(errorObj) {
    return {
        type: types.LOGOUT_ERROR,
        payload: errorObj
    }
}

export function logoutSuccess(logoutData) {
    return {
        type: types.LOGOUT_SUCCESS,
        payload: logoutData
    }
}

export function loginFetchData(loginData) {
    return (dispatch) => {
        loginData === true; // TEST TEST TEST
        Promise.resolve({
            data: {
                token: 'lkejgoswejkfgwelkflew'
            }
        }).then((response) => {
            dispatch(loginSuccess(response.data.token))
        }).catch((error) => {
            dispatch(loginError(error))
        })
    }
}

export function logoutFetchData() {
    return (dispatch) => {
        Promise.resolve()
        .then(() => {
            console.log('In login promise then')
            dispatch(logoutSuccess(''))
        }).catch((error) => {
            dispatch(logoutError(error))
        })
    }
}