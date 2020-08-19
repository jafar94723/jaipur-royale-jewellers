import {createSelector} from 'reselect';

const selectUserReducer = rootReducer => rootReducer.userReducer;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    user => user.currentUser
)