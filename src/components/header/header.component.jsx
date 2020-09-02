import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import Logo from '../../images/logo.png';
const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <img src={Logo} alt="logo" className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
);

export default Header;