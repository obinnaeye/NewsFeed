import React from 'react';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';

class SearchBar extends React.Component {
  render() {
    return(
      <div class="search-box">
        <TextInput options={this.props.options} class="search-bar" />
        <span> Search Headlines </span>
      </div>
    );
  }
}

module.exports = SearchBar;