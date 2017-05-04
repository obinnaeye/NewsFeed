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

// render(
//     <Router>
//         <!--Each route is defined with Route-->
//         <Route path="/" component={Home}/>
//     </Router>,
//     document.getElementById('container')
// );

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
