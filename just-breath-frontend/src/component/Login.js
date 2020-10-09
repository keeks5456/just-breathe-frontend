import React from 'react';
// import { connect } from 'react-redux'
// import { Link } from "react-router-dom"
class Login extends React.Component {
    render(){
        return(
            <div>
            <form className="login-form">
            <lable for="login">Login</lable>
            <input type="text" placeholder="Username" value={null}/>
            <lable for="login">Login</lable>
            <input type="text" placeholder="Username" value={null}/>
            </form>
            </div>
        )
    }
}
// will handle our user data
// there will be changes in state here, 
// there will be a mapstatetoprops and dispatchtoprps here 
// after login a user will then be route to the intro journal page 


export default Login