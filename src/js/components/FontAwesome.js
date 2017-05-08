import React from 'react';
import PropTypes from 'prop-types';

const FontAwesome = props => <i className={props.name} aria-hidden="true" />;

/*eslint-disable*/
FontAwesome.propTypes = {
  name: PropTypes.string,
};

export default FontAwesome;
