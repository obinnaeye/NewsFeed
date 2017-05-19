import dispatcher from '../dispatcher/dispatcher';
/**
 * @desc actions.
 *
 * @returns {void}
 */
const NewsActions = {
  /**
 * @desc actions that dispatches GET_NEWS
 *
 * @returns {void}
 */
  getNews: (obj) => {
    dispatcher.dispatch({
      type: 'GET_NEWS',
      obj,
    });
  },

/**
 * @desc actions that dispatches SORT_NEWS
 *
 * @returns {void}
 */
  sortNews: (obj) => {
    dispatcher.dispatch({
      type: 'SORT_NEWS',
      obj,
    });
  },

/**
 * @desc actions that dispatches GET_SOURCE
 *
 * @returns {void}
 */
  getSource: () => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
    });
  },
};

export default NewsActions;
