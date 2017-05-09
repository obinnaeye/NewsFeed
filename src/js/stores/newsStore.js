import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher/dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  createArticles(obj) {
    axios.get(`https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${obj.source}&sortBy=${obj.sortby}`).then((data) => {
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
    axios(`https://newsapi.org/v1/sources?apiKey=${process.env.APIKey}`).then((data) => {
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
    axios.get(`https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${obj.source}&sortBy=${obj.sortby}`).then((data) => {
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
