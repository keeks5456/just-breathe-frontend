import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index.js';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user:{},
      errorMessage: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
      this.props.login(this.state)
      .then((res) => {
      // console.log(res)
      this.props.history.push('/welcome')},
      (err) => { 
        this.setState({errorMessage: err.message = 'Username or Password are Incorrect'})
        debugger
      });
}

  render() {
    const { username, password } = this.state;
    return (
      <div className="row">
      
      <header className="header"> </header>
        <div className="col-md-4 col-md-offset-4">
        {this.state.errorMessage && <h3 className="error"> { this.state.errorMessage } </h3>}
      <form className="form" onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" value={username} onChange={this.onChange}/>
          </div> 
          
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" value={password} onChange={this.onChange}/>
          </div>
        
        <button type="submit" className="login-button">Login</button>

        <p>Hello there! Please sign up <Link to="/signUp">here</Link> if this is your first time!</p>
      </form>
      <div>
      
      </div>
      </div>
      </div>
    );
  }
}
// insert cute emoji pic 

// let's add some propTypes for additional validation and readability
LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

// we do not want any state mapped to props, so let's make that first parameter to connect `null`
export default withRouter(connect(null, { login })(LoginForm));