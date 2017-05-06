import React from 'react';
import PropTypes from 'prop-types';

const FontAwesome = props => <i className={props.name} aria-hidden="true" />;

FontAwesome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FontAwesome;
