import types from './shop.types';
import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

/*
export const updateCollections = (collectionsMap) => ({
    type: types.UPDATE_COLLECTIONS,
    payload:collectionsMap
})
*/

//normally action is an object

//all thunks are is a action creator
//that returns a function that gets the
// dispatch very similar to mapDispatchToProps

export const fetchCollectionsPending = () => ({
    type: types.FETCH_COLLECTIONS_PENDING
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type:types.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type:types.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

export const fetchCollectionsStart = () => {
    return async dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsPending());
        try{
            const snapshot = await collectionRef.get();
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }catch(e){
            dispatch(fetchCollectionsFailure(e.message))
        }
    }
}
/*

if redux-thunk middleware is active
any time you attempt to dispatch a function
instead of an object, the middleware
will call that function with dispatch
method itself as the first argument.
*/

/*
summary :
we get access to dispatch 
so we can dispatch as we wish
*/