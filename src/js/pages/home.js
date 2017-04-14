import React from 'react';
import path from 'path';
import ReactDOM from 'react-dom';
import HomeImage from '../components/homeImage';
import Login from '../components/login';
import Logo from '../components/logo';

class App extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <HomeImage src={path.resolve(__dirname, 'img', 'giphy.gif' )} alt="animated breaking news"/>
        <Login />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
