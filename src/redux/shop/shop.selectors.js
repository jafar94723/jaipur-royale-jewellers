import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = rootReducer => rootReducer.shopReducer;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections?collections[collectionUrlParam]:null
))

/*
selectCollection gets called with param
If this function gets called 
again with the same 
collectionUrlParam, don't 
rerun this function because 
we'll return the same value as 
last time, which we've memoized 
so just return the selector 
that's been stored.


*/


export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.values(collections) : []
)