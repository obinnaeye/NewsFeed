import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc renders a singel news article in the NewsList component
 * @param {object} props the component props
 * @return {element} return article as li element
 */
const News = props =>
  <li className="flex-item">
    <img src={props.src} alt="news" />
    <span className="news-title">{props.title}</span><br />
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span> Read More <i className="fa fa-external-link" /></span>
    </a>
  </li>;

News.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

module.exports = News;
