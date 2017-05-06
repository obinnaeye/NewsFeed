import React from 'react';
import Select from 'react-select';

const SearchBar = props =>
  <div className="search-box">
    <Select
      name="form-field-name"
      options={props.sources}
      value={props.value}
      class="search-bar"
      onChange={props.onchange}
      clearable
    />
    <span><button onClick={props.onclick}> Search Headlines </button></span>
    <span>
      <select onChange={props.sortAction}>
        {props.sorts}
      </select>
    </span>
  </div>;


export default SearchBar;
