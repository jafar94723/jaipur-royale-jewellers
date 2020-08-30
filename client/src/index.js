import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import {store,persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
ReactDOM.render(
  <React.StrictMode>
    {/* Provider is parent of everything in application
    so that everything has access to store object */}
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
