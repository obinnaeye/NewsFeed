import React from 'react';

class HomeNav extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-transparent navbar-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar bar1"></span>
                    <span className="icon-bar bar2"></span>
                    <span className="icon-bar bar3"></span>
                    </button>
                    <a href="http://www.creative-tim.com">
                        <div className="logo-container">
                            <div className="logo">
                                <img src="assets/img/new_logo.png" alt="Creative Tim Logo" />
                            </div>
                            <div className="brand">
                                gitMe
                            </div>
                        </div>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="example" >
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">
                            <i className="fa fa-facebook-square"></i>
                            Login
                            </a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
      )
  }
}

module.exports = HomeNav;

