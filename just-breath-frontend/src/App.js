import React from 'react';
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Welcome from "./container/Welcome";
import BlogsCard from "./component/BlogsCard";
import ExercisesCard from "./component/ExercisesCard";
import UserFavoritesContainer from "./container/UserFavoritesContainer";
import NavigationBar from './component/Navbar'
import Header from './component/Header'
import NotFound from './component/NotFound'

import requireAuth from './require_auth/require_auth'
import UserProfile from "./component/UserProfile";
import './App.css';
import { connect } from 'react-redux'
import IntroJournal from './component/IntroJournal';
import { setCurrentUser } from './actions';

class App extends React.Component {

  

  render() {
   
    return(
        <Router>
          <div>
          <NavigationBar />
            <Switch>
          
    {<Route exact path='/welcome' component={requireAuth(Welcome)} /> }
          {/* <Route exact path='/welcome' component={Welcome} />*/}
            <Route exact path='/intro_journal' component={IntroJournal}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path="blogs" component={BlogsCard} />
            <Route exact path="exercises" component={ExercisesCard} />
            <Route exact path="favorites" component={UserFavoritesContainer} />
          
            
            </Switch>
          </div>
        </Router>)
  }

}

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user =>
  dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);

