import {all , call } from 'redux-saga/effects';
import {fetchCollectionStart} from './shop/shop.sagas';
import {userSagas} from './user/user.sagas';
export default function* rootSaga(){
    yield all([
        //or fetchCollectionStart()
        call(fetchCollectionStart),
        call(userSagas)
    ])
}


/*
all takes an array of sagas

yield fetchCollectionsStart
//next yield waits for previous yield
//not concurrent
yield fetchCollectionsStart
yield fetchCollectionsStart

//all runs them concurrrently

*/