import React from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../components/homeHeader';
import HomeBody from '../components/HomeBody';

class Index extends React.Component {
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
  <Index />,
  document.getElementById('app'),
);
