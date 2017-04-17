import { EventEmitter } from "events";
import axios from 'axios';

import dispatcher from "../dispatcher/dispatcher";

class NewsStore extends EventEmitter {
  constructor() {
    super()
    this.newsObj = {
      source : "the-next-web",
      sortby: "latest"
    }
    this.articles = [];
    
  }

  createArticles(obj) {
    //const obj = this.newsObj;
    axios.get(`https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${obj.source}&sortby=${obj.sortby}`).then((data) => {
      console.log("got the data!", data);
      this.articles = data.data.articles;
    });
    this.emit('change')
  }
  
  getArticles(){
    return this.articles;
  }

  handleActions(action) {
    switch(action.type) {
      case "GET_NEWS": {
        this.getNews(action.obj);
        break;
      }
    }
  }

}

const newsStore = new NewsStore;
dispatcher.register(newsStore.handleActions.bind(newsStore));

export default newsStore;
