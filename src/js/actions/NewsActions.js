import dispatcher from '../dispatcher/dispatcher';

const NewsActions = {
  getNews: (obj) => {
    dispatcher.dispatch({
      type: 'GET_NEWS',
      obj,
    });
  },

  sortNews: (obj) => {
    dispatcher.dispatch({
      type: 'SORT_NEWS',
      obj,
    });
  },

  getSource: () => {
    dispatcher.dispatch({
      type: 'GET_SOURCE',
    });
  },
};

export default NewsActions;
