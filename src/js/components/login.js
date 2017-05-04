import React from 'react';
//import GoogleLogin from 'react-google-login';
import FontAwesome from './fontAwesome';

/*const responseGoogle = (response) => {
  console.log(response);
};*/

class Login extends React.Component {
  /*onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }*/
  render() {
    return (
      <a href='/auth/google' className="signin">
        <button
          /*clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}*/
        >
          <FontAwesome
            name="fa fa-google-plus"
          />
          <span> Login with Google</span>
        </button>
      </a>
    );
  }
}


module.exports = Login;
