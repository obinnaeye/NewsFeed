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
    const self = this;
    axios.get(`https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${obj.source}`).then((data) => {
      this.articles = data.data.articles;
      console.log("got the data!", this.articles);
      this.emit('change')
    });
  }
  
  getArticles(){
    console.log('Get Articles: ' + this)
    return this.articles;
  }

  handleActions(action) {
    switch(action.type) {
      case "GET_NEWS": {
        this.createArticles(action.obj);
        break;
      }
    }
  }

}

const newsStore = new NewsStore;
dispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
