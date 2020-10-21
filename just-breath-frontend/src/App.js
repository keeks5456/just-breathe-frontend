import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
//containers
import Welcome from "./container/Welcome";
import BlogsContainer from "./container/BlogsContainer";
import ExercisesContainer from "./container/ExercisesContainer";
import UserFavorites from "./container/FavoriteContainer";
import UserProfile from "./container/UserProfile";
//components
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import NavigationBar from './component/Navbar'
import Header from './component/Header'
import NotFound from './component/NotFound'
import IntroJournal from './component/IntroJournal';
//require auth
import requireAuth from './require_auth/require_auth'
import './App.css';
import { connect } from 'react-redux'
//actions
import { setCurrentUser } from './actions';

class App extends React.Component {

  render() {
    return(
        <Router>
          <div>
          <NavigationBar />
            <Switch>
          { <Route exact path='/welcome' component={Welcome} />}
            <Route exact path="/blogs" component={BlogsContainer} />
          { <Route exact path='/profile' component={UserProfile} />}
            <Route exact path='/intro_journal' component={IntroJournal}/>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path="/exercises" component={ExercisesContainer} />
            <Route exact path="/favorites" component={UserFavorites} />
            <Route exact path="*" component={NotFound}/>
            </Switch>
          </div>
        </Router>)
  }

}

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user =>
  dispatch(setCurrentUser(user))
})

//take this out later or keep ??

export default connect(null, mapDispatchToProps)(App);

