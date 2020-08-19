/*

import {Provider} from 'react-redux';
1. in index.js, wrap entire app with 
Provider.

2. make redux in src
    1. make root-reducer : combineReducer(from redux) takes an object of all reducers
    2. make store.js : createStore(rootReducer,applyMiddleware(...args))
    3. make folder for each object in your project like user,cart,shop
        a. actions file
        b. action types file
        c. reducer file


3. subscriptions
import {connect} from react-redux;
connect is a higher-order component
: take component as argument
and returned suped up component

for each component that takes a prop
we need mapStateToProp

for each component that modified the state
we need to mapDispatchToProp
*/