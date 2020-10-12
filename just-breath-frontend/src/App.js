import React from 'react';
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Welcome from "./container/Welcome";
import Navbar from './component/Navbar'

import requireAuth from './require_auth/require_auth'
import UserProfile from "./component/UserProfile";
import './App.css';

class App extends React.Component {
  render() {
    return(
        <Router>
          <div>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/welcome' component={requireAuth(Welcome)} />
              <Route render={() => <h3>No Match</h3>} />
            </Switch>
          </div>
        </Router>)
  }

}

export default App;

