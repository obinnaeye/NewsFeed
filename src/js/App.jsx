import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index from './pages/Index';
import NewsPage from './pages/NewsPage';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <HomeHeader />
//         <HomeBody />
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Router>
    <Route path="/" component={Index} />
    <Route path="/newpage" component={NewsPage} />
  </Router>,
  document.getElementById('app')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );
