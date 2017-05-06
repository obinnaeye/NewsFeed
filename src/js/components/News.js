import React from 'react';

const News = props =>
  <li className="flex-item">
    <img src={props.src} alt="news" />
    <span className="news-title">{props.title}</span>
    <a href={props.href} target="_blank" rel="noreferrer noopener">
      <i className="fa fa-external-link" />
    </a>
  </li>;

module.exports = News;
