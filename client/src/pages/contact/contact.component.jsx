import React from 'react';
import './contact.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
const ContactPage = () => (
    <div className='contact-page'>
        <h2>Want to work with me?</h2>
        <a href="mailto:mak94723@gmail.com"><CustomButton>CONTACT ME</CustomButton></a>
        <h2>OR</h2>
        <a href="https://relaxed-tereshkova-ed0905.netlify.app/"><CustomButton>Check out my other Projects :)</CustomButton></a>
    </div>
)

export default ContactPage;