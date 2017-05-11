import dispatcher from '../dispatcher/dispatcher';

export const getNews = (obj) => {
  dispatcher.dispatch({
    type: 'GET_NEWS',
    obj,
  });
};

export const sortNews = (obj) => {
  dispatcher.dispatch({
    type: 'SORT_NEWS',
    obj,
  });
};
