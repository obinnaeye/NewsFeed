import React from 'react';
import axios from 'axios';
import News from './news';
import * as NewsActions from '../actions/newsActions';
import NewsStore from '../stores/newsStore';


export default class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      source : "cnn",
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
    const source = this.state.source;
    const sortby = this.state.sortby;
    const obj = {
      source : "the-next-web",
      sortby: "latest"
    };
    axios(`https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${obj.source}&sortby=${obj.sortby}`).then((data) => {
      news = data.articles[0];
      console.log('News Here ' + news);
    });
    
    console.log("NewsList Data " + news)

    /*const NewsComponents = news.map((item) => {
        return <News key={item.publishedAt} title={item.title} description={item.description} author={item.author} href={item.url} image={item.urlToImage}  />; 
    });*/

    return (
      <div>
        <ul>{'NewsComponents'}</ul>
      </div>
    );
  }
}
