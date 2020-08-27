import {takeLatest, put, all, call} from 'redux-saga/effects';
import types from './user.types';
import {googleProvider, auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {signInSuccess,signInFailure} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
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


export function* onCheckUserSession(){
    
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}