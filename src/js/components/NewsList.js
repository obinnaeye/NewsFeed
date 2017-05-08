import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';

const NewsList = props => <ul className="flex-container">{props.news}</ul>;

/*eslint-disable*/
NewsList.propTypes = {
  news: PropTypes.array,
};

NewsList.defaultProps = {
  news: []
};

module.exports = NewsList;
