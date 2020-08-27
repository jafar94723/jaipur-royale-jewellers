import types from './user.types';

export const googleSignInStart = () => ({
    type:types.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = credentials => ({
    type:types.GOOGLE_SIGN_IN_START,
    payload:credentials
})

export const signInSuccess = user => ({
    type:types.SIGN_IN_SUCCESS,
    payload:user
})

export const signInFailure = error => ({
    type:types.SIGN_IN_FAILURE,
    payload:error
})

export const checkUserSession = () => ({
    type: types.CHECK_USER_SESSION
})
