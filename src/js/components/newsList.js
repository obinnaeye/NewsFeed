import React from 'react';
import axios from 'axios';
import News from './News';
import * as NewsActions from '../actions/newsActions';
import NewsStore from '../stores/newsStore';


export default class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      category : "cnn",
      sortby : "latest"
    };
  }

  componentWillMount() {
    NewsStore.on('change', this.getNewsObj);
  }

  componentWillUnmount() {
    NewsStore.removeListener('change', this.getNewsObj);
  }
  
  getNewsObj() {
    this.setState(
      NewsStore.getNewsObj
    );
  }

  render() {
    let news;
    const category = this.state.category;
    const sortby = this.state.sortby;
    axios(`news-site?category=${category}&sortby=${sortby}`).then((data) => {
      news = data.articles[0];
      return data;
    });

    const NewsComponents = news.map((item) => {
        return <News key={item.publishedAt} title={item.title} description={item.description} author={item.author} href={item.url} image={item.urlToImage}  />; 
    });

    return (
      <div>
        <ul>{NewsComponents}</ul>
      </div>
    );
  }
}
