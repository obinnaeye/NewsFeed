import React from 'react';
import FontAwesome from './FontAwesome';
import '../../scss/main.scss';

/* eslint-disable react/jsx-filename-extension */
/**
 * @param {void}
 * @return {element} Login-button
 */
const Login = () =>
  <button className="btn2 btn">
    <a href="/auth/google">
      <FontAwesome
        name="fa2 fa fa-google-plus"
      />
      <span> Login with Google</span>
    </a>
  </button>;

export default Login;
