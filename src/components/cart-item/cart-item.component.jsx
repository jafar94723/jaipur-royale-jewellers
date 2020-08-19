import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name,quantity } }) => (
    <div className='cart-item'>
        <img src={`${imageUrl}`} alt="" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x Rs. {Number(price)*10}</span>
        </div>
    </div>
)

export default CartItem;