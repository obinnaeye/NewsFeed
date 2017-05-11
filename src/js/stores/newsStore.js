import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher/dispatcher';

require('dotenv').config();

/**
 * @class NewsStore
 * @extends {EventEmitter}
 */
class NewsStore extends EventEmitter {
  /**
   * Creates an instance of NewsStore.
   *
   * @memberOf NewsStore
   */
  constructor() {
    super();
    this.newsAPI = 'https://newsapi.org/v1/articles';
    this.sourceAPI = 'https://newsapi.org/v1/sources';
    this.articles = [];
    this.createArticles = this.createArticles.bind(this);
  }

  /**
   *
   * @param {any} obj
   *
   * @memberOf NewsStore
   */
  createArticles(obj) {
    axios.get(`${this.newsAPI}?apiKey=${process.env.APIKey}&source=${obj.source}&sortBy=${obj.sortby}`).then((data) => {
      this.articles = data.data.articles;
      this.emit('change');
    });
  }

  /**
   *
   * @returns (object)
   *
   * @memberOf NewsStore
   */
  getArticles() {
    return this.articles;
  }

  /**
   *
   * @returns (object)
   *
   * @memberOf NewsStore
   */
  getSource() {
    const options = [];
    const rawSource = [];
    axios(`${this.sourceAPI}`).then((data) => {
      const { sources } = data.data;
      sources.forEach((source) => {
        rawSource.push(source);
        options.push({ value: source.id, label: source.name, sortby: source.sortBysAvailable });
      });
    });
    /*eslint-disable*/
    return {
      options,
      rawSource
    };
  }

  /**
   * @param {object} obj 
   * 
   * @memberOf NewsStore
   */
  sortArticles(obj) {
    axios.get(`${this.newsAPI}?apiKey=${process.env.APIKey}&source=${obj.source}&sortBy=${obj.sortby}`).then((data) => {
      this.articles = data.data.articles;
      this.emit('change');
    });
  }
 /*eslint-disable*/
  /**
   * @param {any} action 
   * @returns {any}
   * 
   * @memberOf NewsStore
   */
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
