import React from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../components/homeHeader';
import HomeBody from '../components/homeBody';

class App extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeBody />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
