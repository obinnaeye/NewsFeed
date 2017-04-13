import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from './fontAwesome';

const responseGoogle = (response) => {
  console.log(response);
};

class Login extends React.Component {
  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  }
  render() {
    return (
      <div className="signin">
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        >
          <FontAwesome
            name="fa fa-google-plus"
          />
          <span> Login with Google+</span>
        </GoogleLogin>
        <a href="#" onClick={this.signOut.bind(this)}>Sign out</a>
      </div>
    );
  }
}


module.exports = Login;
