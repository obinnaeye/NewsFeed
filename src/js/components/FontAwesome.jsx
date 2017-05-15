import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {any} props
 * @return {element} icon
 */
const FontAwesome = props => <i className={props.name} aria-hidden="true" />;

/* eslint-disable react/require-default-props */
FontAwesome.propTypes = {
  name: PropTypes.string,
};

export default FontAwesome;
