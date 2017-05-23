import React from 'react';
import FontAwesome from './FontAwesome';

/**
 * @desc renders the Logout component
 * @param {void}
 * @return {element} Logout-button
 */
const Logout = () =>
  <li><a href="/logout"><FontAwesome name="fa fa-sign-out" /> Logout</a></li>;

module.exports = Logout;
