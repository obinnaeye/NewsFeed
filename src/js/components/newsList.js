import React from 'react';
import News from './news';
import * as NewsActions from '../actions/newsActions';
import NewsStore from '../stores/newsStore';
import '../../scss/main.scss';
export default class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      articles : []
    };
  }

  componentWillMount() {
    NewsActions.getNews({source: 'al-jazeera-english', sortby: 'top'});
    NewsStore.on('change', () => {
      this.setState({
        articles : NewsStore.getArticles()
      });
    });
  }

  render() {
    const news = this.state.articles;
    const NewsComponents = news.map((item, i) => {
        return <News key={i} title={item.title}  author={item.author} href={item.url} src={item.urlToImage}  />; 
    });

    return (
        <ul class="flex-container">{NewsComponents}</ul>
    );
  }
}

module.exports = NewsList;