import React from 'react';
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

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

// SearchBar.propTypes = {
//   sources: PropTypes.arrayOf(PropTypes.any).isRequired,
//   value: PropTypes.shape(PropTypes.any).isRequired,
// };

export default SearchBar;
