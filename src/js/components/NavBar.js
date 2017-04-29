import React from 'react';
import Logout from './Logout'

class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">gistMe</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <Logout />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


module.exports = Navbar;