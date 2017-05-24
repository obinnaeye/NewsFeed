import { EventEmitter } from 'events';

import appDispatcher from '../dispatcher/AppDispatcher';

require('dotenv').config();

/**
 * @desc holds the news sources and emit change
 * event when sources are updated
 * @class SourceStore
 * @extends {EventEmitter}
 * @return {void}
 */
class SourceStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

  /**
   * @desc updates news sources
   * @param {array} sources news sources
   * @memberof SourceStore
   * @return {void}
   */
  setSource(sources) {
    this.sources = sources;
    this.emit('sources');
  }

  /**
   * @desc handles GET_SOURCES action dispatched by the dispatcher
   * @param {object} action the action dispatched by dispatcher
   * @returns {void}
   * @memberof SourceStore
   */
  handleActions(action) {
    switch (action.type) {
      case 'GET_SOURCES': {
        this.setSource(action.sources);
        break;
      }
      default: {
        break;
      }
    }
  }

}

const sourceStore = new SourceStore();
appDispatcher.register(sourceStore.handleActions.bind(sourceStore));
export default sourceStore;
