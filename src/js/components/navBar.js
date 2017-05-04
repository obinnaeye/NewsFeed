import React from 'react';
import Logout from './logout'

class Navbar extends React.Component {

  signOut() {
    console.log('Footer')
  }
  render() {
    return (
          <div className="header">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Page 1-1</a></li>
                      <li><a href="#">Page 1-2</a></li>
                      <li><a href="#">Page 1-3</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Page 2</a></li>
                </ul>
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