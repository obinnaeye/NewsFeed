import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';

const NewsList = props => <ul className="flex-container">{props.news}</ul>;

NewsList.propTypes = {
  news: PropTypes.element.isRequired,
};

module.exports = NewsList;
