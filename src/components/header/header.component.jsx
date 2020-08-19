import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.style.scss';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :<Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {hidden?null:<CartDropdown/>}
    </div>
);

//passes rootReducer automatically
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

/*
//this gets passed the rootReducer
const mapStateToProps = rootReducer =>({
    currentUser:selectCurrentUser(rootReducer),
    hidden:selectCartHidden(rootReducer)
})
*/

export default connect(mapStateToProps)(Header);