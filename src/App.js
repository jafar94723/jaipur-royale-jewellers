import React, { Fragment } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.container";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckOutPage from './pages/checkout/checkout.component';
import Header from "./components/header/header.component";
import { Switch, Route,Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
//import {addCollectionAndDocuments} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
//import {selectCollectionsForPreview} from './redux/shop/shop.selectors';
import ContactPage from './pages/contact/contact.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //const {collectionsArray} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
                                                                      //return new objects with only values that we wanna keep
        //addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title, items})));

      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
          render={()=>this.props.currentUser?
          <Redirect to="/"/>
          :<SignInAndSignUpPage/>} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
mapDispatchToProps is a function 
that gets dispatch property,
and returns an object
where the prop name will be 
whatever prop we want to pass in
that dispatches the new action
that we're trying to pass.

*/


/*
dispatch is a way for redux to know
that whatever object you're passing me
is going to be an action object that 
I'm going to pass to every reducer.

internally,
redux calls mapDispatchToProps(dispatch)
and returns an object of all props!
One of the props is setCurrentUser mapped to a function
where the function is defined as below :

It uses Closure to save dispatch.


mapDispatchToProps will return this :-
{
setCurrentUser : user => dispatch({type:'SET_CURRENT_USER',
                  payload:user})
}

now whenever setCurrentUser is called,
dispatch({}) will be called that will 
alert all reducers and correct
reducer will do what it must.

*/