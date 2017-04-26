import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from './fontAwesome';

/*const responseGoogle = (response) => {
  console.log(response);
};*/

class Login extends React.Component {
  render() {
    return (
      <a href='/auth/google' className="signin">
        <GoogleLogin>
          <FontAwesome
            name="fa fa-google-plus"
          />
          <span> Login with Google</span>
        </GoogleLogin>
      </a>
    );
  }
}


module.exports = Login;
