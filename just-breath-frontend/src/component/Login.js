import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index.js';
import { Link, withRouter, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user:{}
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
      .then((res) =>  
      this.props.history.push('/welcome'),
      (err) => {
        debugger
      });
}
        //   if(res.error){
        //       this.setState({ error: true }, alert(res.error))

        //       }else {
        //           this.handleLogin(res)
        //           this.props.history.push("/welcome");
        //       }
            // }
    //   )
    // }
            

  handleLogin = (res) => {
    console.log(res);
    debugger
    const currentUser = { currentUser: res.data.user };
    localStorage.setItem("token", res.data.jwt);
    this.setState({
      user: currentUser,
    });
    this.props.history.push('/welcome')
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password" value={password} onChange={this.onChange}/>
          </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div>
      <p>Hello there! Please sign up <Link to="/signUp">here</Link> if this is your first time!</p>

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