import React from 'react';
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Welcome from "./container/Welcome";
import NavigationBar from './component/Navbar'
import Header from './component/Header'
import NotFound from './component/NotFound'
import requireAuth from './require_auth/require_auth'
import UserProfile from "./component/UserProfile";
import './App.css';
import IntroJournal from './component/IntroJournal';

class App extends React.Component {
  render() {
    return(
        <Router>
          <div>
            <Switch>
          
           {/* <Route exact path='/welcome' component={requireAuth(Welcome)} /> */}
           <Route exact path='/welcome' component={Welcome} />
            <Route exact path='/intro_journal' component={IntroJournal}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>)
  }

}

export default App;

