import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index.js';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
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
              {!!localStorage.jwtToken ? userLinks : guestLinks}
            </div>
          </div>
        </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.isAuthenticated
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);