import {takeLatest,call,put} from 'redux-saga/effects';
import types from './shop.types';
import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess,
    fetchCollectionsFailure} from './shop.actions';

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        
        //we can write it this way, but we want to yield this in case it takes longer so we can cancel it
        //const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);    
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(e){
        yield put(fetchCollectionsFailure(e.message));
    }
}

export function* fetchCollectionStart(){
    yield takeLatest(types.FETCH_COLLECTIONS_PENDING,fetchCollectionsAsync )
}