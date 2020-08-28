import {takeLatest, put, all, call} from 'redux-saga/effects';
import types from './user.types';
import {googleProvider, 
        auth, 
        createUserProfileDocument,
        getCurrentUser} from '../../firebase/firebase.utils';
import {signInSuccess,
        signInFailure,
        signOutSuccess,
        signOutFailure,
        signUpSuccess,
        signUpFailure} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
    }catch(e){
        yield put(signInFailure(e))
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch(e){
        yield put(signInFailure(e))
    }
}

export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    }catch(e){
        yield put(signInFailure(e))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(types.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(types.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(e){
        yield put(signInFailure(e));
    }
}

export function* onCheckUserSession(){
    yield takeLatest(types.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(e){
        yield put(signOutFailure(e));
    }
}

export  function* onSignOutStart(){
    yield takeLatest(types.SIGN_OUT_START, signOut);
}

export function* onSignUp({payload:{email,password,displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user, additionalData:{displayName}}));
    }catch(e){
        yield put(signUpFailure(e));
    }
}

export function* onSignUpStart(){
    yield takeLatest(types.SIGN_UP_START,onSignUp )
}

export function* onSignUpSuccess(){
    yield takeLatest(types.SIGN_UP_SUCCESS,signInAfterSignUp);
}

export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData);
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}