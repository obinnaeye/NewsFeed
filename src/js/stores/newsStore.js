import { EventEmitter } from 'events';

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
    this.articles = [];
  }

  setArticles(articles) {
    this.articles = articles;
    this.emit('change');
  }

  /**
   * @param {any} action
   * @returns {any}
   *
   * @memberOf NewsStore
   */
   /* eslint-disable */
  handleActions(action) {
    switch (action.type) {
      case 'GET_NEWS': {
        this.setArticles(action.articles);
        break;
      }
    }
  }

}

const newsStore = new NewsStore();
dispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
