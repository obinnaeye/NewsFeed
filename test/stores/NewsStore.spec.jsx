import * as NewsStore from '../../src/js/stores/NewsStore';
import Dispatcher from '../../src/js/dispatcher/dispatcher';

/* eslint-disable no-undef */
jest.mock('../../src/js/dispatcher/dispatcher');
jest.dontMock('../../src/js/stores/NewsStore');

describe('NewsStore', () => {
  // sample data for callback
  const getNewsObj = {
    type: 'GET_NEWS',
    obj: { source: 'al-jazeera-english', sortBy: 'top' }
  };

  const sortNewsObj = {
    type:'SORT_NEWS',
    obj: { source: 'al-jazeera-english', sortBy: 'top' }
  };

  let callback;

  beforeEach(() => {
    callback = Dispatcher.register.mock.calls[0][0];
  });

  test('registers a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  test('initializes with no data', () => {
    const count = NewsStore.default.getArticles().length;
    expect(count).toBe(0);
  });

  test('should call createArticles when "GET_NEWS" is dispatched', () => {
    const spyStore = jest.spyOn(NewsStore.default, 'createArticles');
    callback(getNewsObj);
    expect(spyStore).toHaveBeenCalled();
  });

  test('should call sortArticles when "SORT_NEWS" is dispatched', () => {
    const spyStore = jest.spyOn(NewsStore.default, 'sortArticles');
    callback(sortNewsObj);
    expect(spyStore).toHaveBeenCalled();
  });
});
