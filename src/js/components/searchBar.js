import React from 'react';
import axios from 'axios';

import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select';
import * as NewsActions from '../actions/newsActions';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state ={
      source : [],
      currentValue : ''
    };
    this.getSource =this.getSource.bind(this);
  }
  
  getSource() {
    let options = [];
    axios(`https://newsapi.org/v1/sources?apiKey=213327409d384371851777e7c7f78dfe`).then((data) => {
      const source = data.data.sources;
      source.forEach((item) => {
        options.push({value: item.id, label:item.name});
      });
    });
    this.setState({
      source : options
    });
  }
  
  componentWillMount() {
    this.getSource();
  }
  
  getValue(value){
    this.setState({currentValue: value});
  }
  
  searchNews(){
    const source = this.state.currentValue.value;
    NewsActions.getNews({source: source, sortby: 'top'})
  }
  
  
  render() {
    return(
      <div class="search-box">
        <Select
        name="form-field-name"
        options={this.state.source}
        value = {this.state.currentValue}
        class="search-bar"
        onChange={this.getValue.bind(this)}
        clearable={true}
        ref="search-bar"
        />
        <span><button onClick={this.searchNews.bind(this)}> Search Headlines </button></span>
      </div>
    );
  }
}

module.exports = SearchBar;