import dispatcher from '../dispatcher/dispatcher';

export function getNews(obj) {
  dispatcher.dispatch({
    type: 'GET_NEWS',
    obj,
  });
}

export function sortNews(obj) {
  dispatcher.dispatch({
    type: 'SORT_NEWS',
    obj,
  });
}
