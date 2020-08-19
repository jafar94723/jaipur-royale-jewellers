import types from './user.types';

const INITIAL_STATE = {
    currentUser : null
}


//if state == undefined, use default value
const userReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case types.SET_CURRENT_USER:
        return {
            ...state,
            currentUser:action.payload
        }
        default:
            return state;
    }
}

//every reducer gets every single
//action that ever gets fired.
//even if action is not related to reducer
//All reducers are listening for all
//actions
//and thus, we need action.type
//and always return default

export default userReducer;