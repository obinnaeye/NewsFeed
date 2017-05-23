import { EventEmitter } from 'events';

import appDispatcher from '../dispatcher/AppDispatcher';

require('dotenv').config();

/**
 * @desc holds the news artilces and emit change event when articles are updated
 * @class NewsStore
 * @extends {EventEmitter}
 * @param {void}
 * @return {void}
 */
class NewsStore extends EventEmitter {

  constructor() {
    super();
    this.articles = [];
  }


  /**
   * @desc updates news articles
   * @param {any} articles
   * @memberof NewsStore
   * @return {void}
   */
  setArticles(articles) {
    this.articles = articles;
    this.emit('change');
  }

  /**
   * @desc handles GET_NEWS action dispatched by the dispatcher
   * @param {any} action
   * @returns {void}
   * @memberof NewsStore
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
appDispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
