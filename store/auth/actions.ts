import * as types from './types.ts';

export function loginError(errorObj) {
    return {
        type: 'LOGIN_ERROR'
    }
}