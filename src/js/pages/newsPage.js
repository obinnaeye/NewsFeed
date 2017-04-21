import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/navBar';
import SearchBar from '../components/searchBar';
import NewsList from '../components/newsList';
import axios from 'axios';
import * as NewsActions from '../actions/newsActions';

class NewsPage extends React.Component {
  constructor(){
    super();
    this.state ={
      sources : [],
      rawSource: [],
      currentValue : '',
      sortBy : ['top', 'latest']
    };
    this.getSource =this.getSource.bind(this);
    this.sourceObj = [];
  }
  
  getSource() {
    let options = [];
    let rawSource = [];
    axios(`https://newsapi.org/v1/sources?apiKey=213327409d384371851777e7c7f78dfe`).then((data) => {
      const source = data.data.sources;
      source.forEach((item) => {
        rawSource.push(item);
        options.push({value: item.id, label:item.name, sortby: item.sortBysAvailable});
      });
    });
    this.sourceObj = options;
    this.setState({
      sources : options,
      rawSource
    }, () => {});
  }
  
  componentWillMount() {
    this.getSource();
  }
  
  componentDidMount() {
    this.getSource();
  }
  
  getValue(value){
    if(value){
      this.setState({
        currentValue: value,
        sortBy: value.sortby
      });
    }
  }
  
  getSorts() {
    const sorts = this.state.sortBy;
    if(sorts) {
      const renderSorts = sorts.map((sort, i) => {
        return <option key={i} value={sort}>{sort}</option>
      })
      return renderSorts;
    }
  }
  
  searchNews(){
    const source = this.state.currentValue.value;
    const sortby = this.state.sortBy;
    if(source)
    NewsActions.getNews({source: source, sortby: sortby[0]})
  }
  
  sortAction(){
    return (e) => {
      const source = this.state.currentValue.value;
      const sortby = e.target.value;
      console.log(sortby)
      if(source)
      NewsActions.getNews({source: source, sortby})
    }   
  }
  
  render(){
    return(
      <div>
        <NavBar />
        <SearchBar
          sources={this.state.sources}
          value = {this.state.currentValue}
          onchange={this.getValue.bind(this)}
          onclick={this.searchNews.bind(this)}
          sorts = {this.getSorts()}
          sortAction = {this.sortAction()}
        />
        <NewsList />
      </div>
    );
  }
}

ReactDOM.render(<NewsPage />, document.getElementById('app'));
