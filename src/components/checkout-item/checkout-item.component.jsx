import React from 'react';
import { connect } from 'react-redux';
import { addItem,removeItem,clearItemFromCart, } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart,addItem,removeItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={`${imageUrl}`} alt="item" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price*10}</span>
            <div onClick={() => clearItemFromCart(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);