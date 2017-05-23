import React from 'react';
import Logout from './Logout';

/**
 * @desc renders the NavBar component, a navigation bar
 * @param {void}
 * @return {element} Navigations-bar
 */
const NavBar = () =>
  <nav className="navbar navbar-transparent navbar-top header" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button
          id="menu-toggle"
          type="button" className="navbar-toggle"
          data-toggle="collapse" data-target="#example"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar bar1" />
          <span className="icon-bar bar2" />
          <span className="icon-bar bar3" />
        </button>
        <a href="/">
          <div className="logo-container">
            <div className="logo">
              <img src="assets/img/new_logo.png" alt="gistMe Logo" />
            </div>
            <div className="brand">
                gistMe
            </div>
          </div>
        </a>
      </div>
      <div className="collapse navbar-collapse" id="example" >
        <ul className="nav navbar-nav navbar-right">
          <img
            src="img/globe-earth-animation.gif" alt="background"
          />
          <Logout />
        </ul>
      </div>
    </div>
  </nav>;

export default NavBar;

