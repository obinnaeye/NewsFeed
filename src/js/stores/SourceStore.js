import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher/dispatcher';

require('dotenv').config();

/**
 * @class SourceStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * Creates an instance of SourceStore.
   *
   * @memberOf SourceStore
   */
  constructor() {
    super();
    this.newsAPI = 'https://newsapi.org/v1/articles';
    this.sourceAPI = 'https://newsapi.org/v1/sources';
    this.articles = [];
    this.sources = [];
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
    /* eslint-disable comma-dangle */
    this.sources = {
      options,
      rawSource
    };
    console.log("store getsource", this.sources)
    this.emit('source');
  }

  /**
   * @param {any} action
   * @returns {any}
   *
   * @memberOf SourceStore
   */
   /* eslint-disable consistent-return */
  handleActions(action) {
    switch (action.type) {
      case 'GET_SOURCE': {
        this.getSource();
        break;
      }
      default : {
        return 'No Action Was Called!';
      }
    }
  }

}

const sourceStore = new SourceStore();
dispatcher.register(sourceStore.handleActions.bind(sourceStore));
export default sourceStore;
