import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

/**
 * @desc renders a bar with searchable select options of news sources and sort parameters
 * @param {any} props
 * @return {element} search bar
 */
/* eslint-disable react/prop-types */
const SourceBar = props =>
  <div className="search-box">
    <Select
      name="form-field-name"
      options={props.sources}
      value={props.value}
      class="search-bar"
      onChange={props.onChange}
      clearable
    />
    <span className="search-btn"><button onClick={props.onClick}> Reload Headlines </button></span>
    <span>
      <span className="sort-by"><b>Sort By: </b></span>
      <select onChange={props.sortAction}>
        {props.sorts}
      </select>
    </span>
  </div>;

SourceBar.defaultProps = {
  sources: [],
  value: {},
  sorts: [],
};

/* eslint-disable react/forbid-prop-types */
SourceBar.propTypes = {
  sources: PropTypes.array,
  value: PropTypes.object,
  sorts: PropTypes.array,
};


export default SourceBar;
