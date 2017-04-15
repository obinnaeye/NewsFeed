import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/navBar';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

class NewsPage extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <SearchBar />
        <NewsList />
      </div>
    );
  }
}

ReactDOM.render(<NewsPage />, document.getElementById('app'));
