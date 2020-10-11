import React from 'react';
import { connect } from 'react-redux'
import * as loadUser from "../actions/index.js"
// import { Link } from "react-router-dom"
class Login extends React.Component {

   

    
    render(){
        return(
            <div className="one-column-grid">
                <form className="login-form">
                <lable for="login">Login</lable>
                <input 
                type="text" 
                placeholder="username" 
                name="username" 
                value={null}/>
            <div className="profile-form-row-center">
                <lable for="password">Password</lable>
                <input 
                type="password" 
                placeholder="password" 
                name="password" 
                value={null}/>
            </div>
                </form>
                <button className="submit">Submit</button>
            </div>
        )
    }
}
// will handle our user data
// there will be changes in state here, 
// there will be a mapstatetoprops and dispatchtoprps here 
// after login a user will then be route to the intro journal page 
const mapstatetoprops = state => {
    return state 
}

export default connect(mapstatetoprops, loadUser) (Login)