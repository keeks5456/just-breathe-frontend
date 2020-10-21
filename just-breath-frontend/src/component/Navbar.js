import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index.js';
import {authReducer} from '../reducers/index';
import {withRouter} from 'react-router';
class NavigationBar extends React.Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login')
  }

  render() {
    console.log(this.props.auth)
    const  isAuthenticated  = this.props.auth
    console.log(!!isAuthenticated)
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/welcome">Welcome</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
        <li><Link to="/exercises">Exercise</Link></li>
        <li><Link to="/favorites">Favorite</Link></li>
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );
    const guestLinks = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul>
    );

    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            </div>
            <div className="collapse navbar-collapse">
              {!!isAuthenticated ? userLinks :  guestLinks}
            </div>
          </div>
        </nav>
    );
  }
}

// NavigationBar.propTypes = {
//   auth: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  return {
    auth: state.authReducer.isAuthenticated
  };
}

export default connect(mapStateToProps, { logout })(withRouter(NavigationBar));