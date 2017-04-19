import path from 'path';
import React from 'react';
import News from './news';
//import * as NewsActions from '../actions/newsActions';
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
    NewsStore.on('change', () => {
      this.setState({
        articles : NewsStore.getArticles()
      });
    });
  }

  /*componentWillUnmount() {
    NewsStore.removeListener('change', this.getNewsObj);
  }*/
  
  getNewsObj() {
    console.log("Newslist getNewsObj");
      this.setState({
        articles : NewsStore.getArticles()
      });
  }

  render() {
    const news = this.state.articles;
    
    console.log("NewsList Data " + news);

    const NewsComponents = news.map((item) => {
        return <News key={item.publishedAt} title={item.title} description={item.description} author={item.author} href={item.url} image={item.urlToImage}  />; 
    });

    return (
        <ul class="flex-container">{NewsComponents}</ul>
    );
  }
}

module.exports = NewsList;