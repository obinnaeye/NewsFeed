import React from 'react';
import '../../scss/main.scss';

const NewsList = props => <ul className="flex-container">{props.news}</ul>;

module.exports = NewsList;
