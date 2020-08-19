/*
two types of selectors:
1. input selector


const selectCartReducer = state => state.cartReducer;
const selectUser = state => state.userReducer;

2. output selector

export const selectCartReducerItems = createSelector(
    [selectCartReducer,selectUser],
    (cart,user) => {}
)


*/