import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price;
    const API_KEY ='pk_test_51HHk9ZLUvIm4O0nMPciLpzyyF1reVqiINnatYVGYNdYpsqfek85Q8PcEXvrmseFX3iIIpRJeZzm4bwC1niBGC3Wc007jo2Fjnz';
    const onToken = async token => {
        try{
            await axios({
                url:'payment',
                method:'post',
                data:{
                    amount:priceForStripe,
                    token
                }
            });
            alert('Payment was successful!')
        }catch(e){
            console.log(e);
            alert('There was an issue with your payment.'
            +'Please make sure you are using correct card details.')
        }
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name='Jaipur Royale Jewellers Ltd.'
        billingAddress
        shippingAddress
        description={`Your total is Rs. ${priceForStripe}`}
        amount={priceForStripe*100}
        currency='inr'
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={API_KEY}/>
    )
}

export default StripeCheckoutButton;