/* global describe, expect, beforeEach, jest, test */
import NewsStore from '../../src/js/stores/NewsStore';
import appDispatcher from '../../src/js/dispatcher/AppDispatcher';
import mockArticles from '../mocks/mockData.json';


jest.mock('../../src/js/dispatcher/AppDispatcher');
jest.dontMock('../../src/js/stores/NewsStore');

describe('NewsStore', () => {
  // sample data for callback
  const mockDispatch = {
    type: 'GET_NEWS',
    articles: mockArticles,
  };

  let callback;

  beforeEach(() => {
    callback = appDispatcher.register.mock.calls[0][0];
  });

  test('registers a callback with the dispatcher', () => {
    expect(appDispatcher.register.mock.calls.length).toBe(1);
  });

  test('initializes with no data', () => {
    const count = NewsStore.articles.length;
    expect(count).toBe(0);
  });

  test('should call "setArticles" when "GET_NEWS" is dispatched', () => {
    const spyStore = jest.spyOn(NewsStore, 'setArticles');
    callback(mockDispatch);
    expect(spyStore).toHaveBeenCalled();

    const response = spyStore.mock.calls[0][0];
    expect(response).toBeDefined();
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(mockArticles.data);
    expect(response.data.articles).toEqual(mockArticles.data.articles);
  });
});
