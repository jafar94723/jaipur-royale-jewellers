import {createSelector} from 'reselect';

const selectCartReducer = rootReducer => rootReducer.cartReducer;

export const selectCartItems = createSelector(
    [selectCartReducer],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCartReducer],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>cartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>cartItems.reduce((acc, item) => acc + item.quantity*item.price*10, 0)
)