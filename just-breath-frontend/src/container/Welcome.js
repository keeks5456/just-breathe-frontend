import React from 'react';
import { Link } from "react-router-dom";
// import userReducer from "../reducers/index.js"
// import loadUser from "../actions/index.js"
class Welcome extends React.Component{

    render(){

        return(
            
            <div className="welcome-page grid-column" >
            
            <div className="welcome-container">
            <h1 className="welcome-heading"><strong>Welcome To A Stress Free You</strong></h1>

            <Link to="/intro_journal">
            <button className="intro_journal_button"> Entry Journal </button>
            </Link>
            </div>

            <div className="motivation-container">
            <h1 className="motivation">Motivational Quote Here</h1>
            <button className="motive-shuffler">Shuffle Me!</button>
            </div>

          </div>
        )
    }
}


export default Welcome;

