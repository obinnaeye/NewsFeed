import { EventEmitter } from "events";
import axios from 'axios';

import dispatcher from "../dispatcher";

class NewsStore extends EventEmitter {
  constructor() {
    super()
    const obj = 
    this.newsList = this.getNews(obj)
  }

  getNews(obj) {
    axios(`news-site?category=${obj.category}&sortby=${obj.sortby}`).then((data) => {
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
