import React from 'react';
import ReactDOM from 'react-dom';
import HomeNav from '../components/homeNav';
import HomeBody from '../components/homeBody';

class App extends React.Component {
  render() {
    return (
      <div>
        <HomeNav />
        <HomeBody />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
