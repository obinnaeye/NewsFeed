import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc creates an icon from FontAwesome
 * @param {object} props the component props
 * @return {element} icon font awesome icon
 */
const FontAwesome = props => <i className={props.name} aria-hidden="true" />;

FontAwesome.propTypes = {
  name: PropTypes.string.isRequired,
};

FontAwesome.defaultProps = {
  name: 'google-login',
};

export default FontAwesome;
