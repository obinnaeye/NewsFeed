import { EventEmitter } from 'events';

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
    this.sources = [];
  }

  /**
   *
   * @returns (object)
   *
   * @memberOf NewsStore
   */
  setSource(sources) {
    this.sources = sources;
    this.emit('sources');
  }

  /**
   * @param {any} action
   * @returns {any}
   *
   * @memberOf SourceStore
   */
   /* eslint-disable */
  handleActions(action) {
    switch (action.type) {
      case 'GET_SOURCES': {
        this.setSource(action.sources);
        break;
      }
    }
  }

}

const sourceStore = new SourceStore();
dispatcher.register(sourceStore.handleActions.bind(sourceStore));
export default sourceStore;
