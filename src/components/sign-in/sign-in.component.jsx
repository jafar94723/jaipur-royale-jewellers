import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    label="email"
                    handleChange={handleChange}
                    required />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    label="password"
                    handleChange={handleChange}
                    required />
                <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form' >Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn);