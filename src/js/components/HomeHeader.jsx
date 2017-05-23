import React from 'react';

/**
 * @desc creates a header component for the home page
 * @param {void}
 * @return {element} home header div
 */
const HomeHeader = () =>
  <nav className="navbar navbar-transparent navbar-top" role="navigation">
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
          <li>
            <img src="img/twitter-whisper-icon-23.png" alt="parrots" />
          </li>
        </ul>
      </div>
    </div>
  </nav>;

export default HomeHeader;
