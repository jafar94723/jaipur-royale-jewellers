import React, { Fragment } from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.container";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { Switch, Route, Link } from "react-router-dom";
import ContactPage from './pages/contact/contact.component';
const App = () => {
    return (
      <Fragment>
        <Header />
        <Link to="/">
        <h1 id="title">Jaipur Royale Jewellers</h1>
        </Link>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={ContactPage}/>
        </Switch>
      </Fragment>
    );
}

export default App;
