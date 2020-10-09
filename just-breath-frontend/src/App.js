import React from 'react';
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Welcome from "./container/Welcome";
import UserProfile from "./component/UserProfile";
import './App.css';

class App extends React.Component {
  render (){
  return (
    <Router>
    <div className="App">
    <Route
    exact
    path="/login"
    render={(routerProps) => {
      return <Login {...routerProps}  />;
    }}
  />
     <SignUp />
     <Welcome />
     <UserProfile />
    </div>
    </Router>
  );
  }
}

export default App;
