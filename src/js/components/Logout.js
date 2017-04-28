import React from 'react';
import FontAwesome from './FontAwesome';

class Logout extends React.Component {
  render() {
    return (
      <li><a href="/logout"><FontAwesome name="fa fa-sign-out" /> Logout</a></li>
    );
  }
}


module.exports = Logout;
