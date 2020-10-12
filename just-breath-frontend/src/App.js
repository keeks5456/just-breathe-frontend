import React from 'react';
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Welcome from "./container/Welcome";
import Navbar from './component/Navbar'
import NotFound from './component/NotFound'
import requireAuth from './require_auth/require_auth'
import UserProfile from "./component/UserProfile";
import './App.css';

class App extends React.Component {
  render() {
    console.log()
    return(
        <Router>
          <div>
            <Switch>
            <Route
            exact
            path="/login"
            render={(routerProps) => {
              return <Login {...routerProps} handleLogin={this.handleLogin} />;
            }}
          />
            <Route exact path='/welcome' component={requireAuth(Welcome)} /> 
            <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>)
  }

}

export default App;

