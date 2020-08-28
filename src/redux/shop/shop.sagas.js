import {takeLatest,call,put, all} from 'redux-saga/effects';
import types from './shop.types';
import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess,
    fetchCollectionsFailure,
    fetchCollectionsStart} from './shop.actions';

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);    
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(e){
        yield put(fetchCollectionsFailure(e.message));
    }
}

export function* fetchCollectionStart(){
    yield takeLatest(types.FETCH_COLLECTIONS_PENDING,fetchCollectionsAsync )
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart),
    ]
    );
}