/*
we can have
    1. user reducer - |
    2. shop reducer - | - Store
    3. home reducer - |

pass store to component as a prop


Action is an object = {
    type:,
    payload:
}


to update user, only user reducer 
cares about the action.


Component -> Action -> {type,payload}
-> UserReducer -> update store
-> pass as prop -> Component



basic format of reducer :-

const userReducer = (currentState,action) =>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            //Can also use Object.assign(target, ...sources)
            //Object.assign({},currentState,{currentUser:action.payload})
            return{
                ...currentState,
                currentUser:action.payload
            };
        default:
            return currentState;
    }
}; // => {currentUser:{...}}


Reducers are listening to every action
if action.type doesn't match,
return state.

*/