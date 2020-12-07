import React, { Component } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/authToken";
import { setCurrentUser, logoutUser } from "./action/auth";
import { Provider } from "react-redux";
import store from "./store/store";
// import PrivateRoute from "./config/privateRouter";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home"
import signUp from "./Components/Form/signUp";
import signIn from "./Components/Form/signIn";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Router>
            <div>
              <Navbar />
            </div>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={signUp} />
              <Route exact path="/signin" component={signIn} />
              </div>
            </Router>
</Provider>
      );
    }
  }