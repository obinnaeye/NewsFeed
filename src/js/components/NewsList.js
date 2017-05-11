import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';

/* eslint-disable react/jsx-filename-extension */
/**
 * @param {any} props
 * @return {element} list of all articles
 */
const NewsList = props => <ul className="flex-container">{props.news}</ul>;

/*eslint-disable*/
NewsList.propTypes = {
  news: PropTypes.array,
};

NewsList.defaultProps = {
  news: []
};

module.exports = NewsList;
