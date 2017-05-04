import React, { PropTypes } from 'react';

import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search-box">
        <Select
          name="form-field-name"
          options={this.props.sources}
          value={this.props.value}
          class="search-bar"
          onChange={this.props.onchange}
          clearable={true}
          ref={"search-bar"}
        />
        <span><button onClick={this.props.onclick}> Search Headlines </button></span>
        <span>
          <select onChange={this.props.sortAction}>
            {this.props.sorts}
          </select>
        </span>
      </div>
    );
  }
}

// SearchBar.propTypes = {
//   sources: PropTypes.arrayOf(PropTypes.any).isRequired,
//   value: PropTypes.shape(PropTypes.any).isRequired,
// };

export default SearchBar;
