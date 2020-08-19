import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        {/* span doesn't cause a break before/after it comes. used to hook css to an inline element. */}
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);


/*

const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
    itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0)
})

This is a selector : extracting some property from state.

Whenever any reducer updates, redux recomposes entire state object

cartItems get a new reference. React detects change.
Rerenders.

BADD!!

1. cartItem will get a new reference whenever ANY reducer is called
2. cartItem even tho has same items, will still get a new reference.


Causes re-renders.



*/