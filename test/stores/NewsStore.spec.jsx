import * as NewsStore from '../../src/js/stores/NewsStore';
import appDispatcher from '../../src/js/dispatcher/dispatcher';
import mockArticles from '../../mocks/mockData.json';

/* eslint-disable no-undef, comma-dangle */
jest.mock('../../src/js/dispatcher/dispatcher');
jest.dontMock('../../src/js/stores/NewsStore');

describe('NewsStore', () => {
  // sample data for callback
  const mockDispatch = {
    type: 'GET_NEWS',
    articles: mockArticles
  };

  let callback;

  beforeEach(() => {
    callback = appDispatcher.register.mock.calls[0][0];
  });

  test('registers a callback with the dispatcher', () => {
    expect(appDispatcher.register.mock.calls.length).toBe(1);
  });

  test('initializes with no data', () => {
    const count = NewsStore.default.articles.length;
    expect(count).toBe(0);
  });

  test('should call "setArticles" when "GET_NEWS" is dispatched', () => {
    const spyStore = jest.spyOn(NewsStore.default, 'setArticles');
    callback(mockDispatch);
    expect(spyStore).toHaveBeenCalled();
  });
});
