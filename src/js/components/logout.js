import React from 'react';

class Logout extends React.Component {
  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  }
  render() {
    return (
      <div className="signout">
        <a href="/" onClick={this.signOut.bind(this)}>Log out</a>
      </div>
    );
  }
}


module.exports = Logout;
