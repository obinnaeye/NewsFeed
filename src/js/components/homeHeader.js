import React from 'react';

class HomeHeader extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-transparent navbar-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button id="menu-toggle" 
                    type="button" className="navbar-toggle" 
                    data-toggle="collapse" data-target="#example">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar bar1"></span>
                    <span className="icon-bar bar2"></span>
                    <span className="icon-bar bar3"></span>
                    </button>
                    <a href="/">
                        <div className="logo-container">
                            <div className="logo">
                                <img src="assets/img/new_logo.png" alt="gistMe Logo" />
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
                            <img src="img/twitter-whisper-icon-23.png" alt="parrots" />
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
      )
  }
}

module.exports = HomeHeader;

