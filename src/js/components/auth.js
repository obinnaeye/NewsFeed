import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  render() {
    return (
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    );
  }
}

ReactDOM.render(
  <Login />,
  document.getElementById('app')
);
