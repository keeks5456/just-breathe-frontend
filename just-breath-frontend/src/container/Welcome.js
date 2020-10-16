import React from 'react';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player"
// import userReducer from "../reducers/index.js"
// import loadUser from "../actions/index.js"
class Welcome extends React.Component{

    render(){

        return(
            
            <div className="welcome-page grid-column" >
            
            <div className="welcome-container">
            <h1 className="welcome-heading"><strong>Welcome To A Stress Free You</strong></h1>
           {/* <img src="{null}" alt="This is a relaxing sunset "/>*/}
            <Link to="/intro_journal">
            <button className="intro_journal_button"> Entry Journal </button>
            </Link>
            </div>

            <div className="motivation-container">
            <h1 className="motivation">Motivational Quote Here</h1>
            <button className="motive-shuffler">Shuffle Me!</button>
            </div>
            {/*implement flippy for motivations  */}
            {/*<ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=ug50zmP9I7s"
            width='500px'
            height='500px'
            />*/} 
            {/*inser this meditation video in the intro journal entry page */}
          
       
          </div>
        )
    }
}

// this welcome page will hold the login and sign up button 
// there will be Links on each button that links to either login page or sign up page
// have the buttons rest on top of each other vertically
export default Welcome;

// <Route
// exact
// path="/login"
// render={(routerProps) => {
//   return <Login {...routerProps}  />;
// }}
// />