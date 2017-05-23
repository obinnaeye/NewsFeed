import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';
import News from './News';

/**
 * @desc renders news artilces unordered list of News component
 * @param {any} props
 * @return {element} list of all articles
 */
const NewsList = (props) => {
  const news = props.news;
  const NewsComponents = news.map((item, i) => {
    let title;
    if (item.title.length > 60) {
      title = `${item.title.slice(0, 56)}...`;
    } else {
      title = item.title;
    }
    const key = i;
    return <News key={key} title={title} href={item.url} src={item.urlToImage} />;
  });
  return <ul className="flex-container">{NewsComponents}</ul>;
};

/*eslint-disable*/
NewsList.propTypes = {
  news: PropTypes.array,
};

NewsList.defaultProps = {
  news: []
};

module.exports = NewsList;
