import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token)
    alert('Payment Successful');
}

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price;
    const API_KEY ='pk_test_51HHk9ZLUvIm4O0nMPciLpzyyF1reVqiINnatYVGYNdYpsqfek85Q8PcEXvrmseFX3iIIpRJeZzm4bwC1niBGC3Wc007jo2Fjnz';

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CaraSense Clothing Ltd.'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is Rs. ${priceForStripe}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={API_KEY}/>
    )
}

export default StripeCheckoutButton;