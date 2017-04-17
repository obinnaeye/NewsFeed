import { EventEmitter } from "events";
import axios from 'axios';

import dispatcher from "../dispatcher/dispatcher";

class NewsStore extends EventEmitter {
  constructor() {
    super()
    const obj = {
      source : "the-next-web",
      sortby: "latest"
    }
    this.newsList = this.getNews(obj)
  }

  getNews(obj) {
    axios(`https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${obj.source}&sortby=${obj.sortby}`).then((data) => {
      console.log("got the data!", data);
      return data;
    });
  }

  handleActions(action) {
    switch(action.type) {
      case "GET_NEWS": {
        this.getNews(action.obj);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}

const newsStore = new NewsStore;
dispatcher.register(newsStore.handleActions.bind(newsStore));

export default newsStore;
