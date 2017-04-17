import React from 'react';

class Logout extends React.Component {
  signOut() {
    /*const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });*/
    console.log('User signed out.');
  }
  render() {
    return (
      <li onClick={this.signOut.bind(this)}><a href="#"><span class="glyphicons glyphicons-log-out"></span> Logout</a></li>
    );
  }
}


module.exports = Logout;
