import React, { Fragment,useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.container";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckOutPage from './pages/checkout/checkout.component';
import Header from "./components/header/header.component";
import { Switch, Route,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import ContactPage from './pages/contact/contact.component';
import {checkUserSession} from './redux/user/user.actions';

const App = ({currentUser,checkUserSession}) => {

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession]);


    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route 
          exact 
          path="/signin" 
          render={()=>currentUser?
          <Redirect to="/"/>
          :<SignInAndSignUpPage/>} />
        </Switch>
      </Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);