import React from 'react';
import PropTypes from 'prop-types';

const News = props =>
  <li className="flex-item">
    <img src={props.src} alt="news" />
    <span className="news-title">{props.title}</span>
    <a href={props.href} target="_blank" rel="noreferrer noopener">
      <i className="fa fa-external-link" />
    </a>
  </li>;

News.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

module.exports = News;
