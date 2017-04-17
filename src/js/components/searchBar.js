import React from 'react';
//import TextInput from 'react-autocomplete-input';
//import 'react-autocomplete-input/dist/bundle';
import axios from 'axios';

import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state ={
      source : []
    }
    this.getSource =this.getSource.bind(this)
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
  
  
  render() {
    return(
      <div class="search-box">
        <Select
        name="form-field-name"
        options={this.state.source} 
        value="two" class="search-bar"
        />
        <span><button> Search Headlines </button></span>
      </div>
    );
  }
}

module.exports = SearchBar;