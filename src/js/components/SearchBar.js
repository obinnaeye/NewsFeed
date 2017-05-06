import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  sources: PropTypes.element.isRequired,
  value: PropTypes.element.isRequired,
  onchange: PropTypes.element.isRequired,
  onclick: PropTypes.element.isRequired,
  sortAction: PropTypes.element.isRequired,
  sorts: PropTypes.element.isRequired,
};


export default SearchBar;
