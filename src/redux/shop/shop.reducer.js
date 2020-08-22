import types from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching:false,
  errorMessage:undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_COLLECTIONS_PENDING:
      return {
        ...state,
        isFetching:true
      }
    case types.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        collections:action.payload,
        isFetching:false
      }
    case types.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage:action.payload,
        isFetching:false
      }
    case types.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections:action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
