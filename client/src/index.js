import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import "materialize-css/dist/css/materialize.min.css";
import reduxThunk from "redux-thunk";
/** @Just for testing mailing from browser console  */
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// console.log("STRIPE KEY IS : ", process.env.REACT_APP_STRIPE_KEY);
// console.log("CURRENT ENVIRONEMENT IS : ", process.env.NODE_ENV);
