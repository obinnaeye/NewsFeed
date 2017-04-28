import React from 'react';
import FontAwesome from './FontAwesome';
import '../../scss/main.scss';

class Login extends React.Component {
  render() {
    return (
      <button className="btn">
        <a href='/auth/google'>
            <FontAwesome
              name="fa fa-google-plus"
            />
            <span> Login with Google</span>
        </a>
      </button>
    );
  }
}


export default Login;
