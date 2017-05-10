import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher/dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.newsAPI = 'https://newsapi.org/v1/articles';
    this.sourceAPI = 'https://newsapi.org/v1/sources';
    this.articles = [];
    this.createArticles = this.createArticles.bind(this);
  }

  createArticles(obj) {
    console.log(process.env.APIKey);
    axios.get(`${this.newsAPI}?apiKey=${process.env.APIKey}&source=${obj.source}&sortBy=${obj.sortby}`).then((data) => {
      this.articles = data.data.articles;
      this.emit('change');
    });
  }

  getArticles() {
    return this.articles;
  }

  getSource() {
    const options = [];
    const rawSource = [];
    axios(`${this.sourceAPI}`).then((data) => {
      const source = data.data.sources;
      source.forEach((item) => {
        rawSource.push(item);
        options.push({ value: item.id, label: item.name, sortby: item.sortBysAvailable });
      });
    });
    /*eslint-disable*/
    return {
      options,
      rawSource
    };
  }

  sortArticles(obj) {
    axios.get(`${this.newsAPI}?apiKey=${process.env.APIKey}&source=${obj.source}&sortBy=${obj.sortby}`).then((data) => {
      this.articles = data.data.articles;
      this.emit('change');
    });
  }
 /*eslint-disable*/
  handleActions(action) {
    /*eslint-enable*/
    switch (action.type) {
      case 'GET_NEWS': {
        this.createArticles(action.obj);
        break;
      }
      case 'SORT_NEWS': {
        this.sortArticles(action.obj);
        break;
      }
      default : {
        return 'No Action Was Called!';
      }
    }
  }

}

const newsStore = new NewsStore();
dispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
