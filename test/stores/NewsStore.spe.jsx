/*eslint-disable */
jest.dontMock('../../src/js/stores/newsStore');
// jest.dontMock('../../constants/AdminConstants.js');

describe('NewsStore', () => {
  let callback;
  let NewsStore;
  let dispatcher;
    // let AdminConstants = require('../../constants/AdminConstants.js');

  beforeEach(() => {
    NewsStore = require('../../src/js/stores/newsStore');
    dispatcher = require('../../src/js/dispatcher/dispatcher');
    console.log(dispatcher);
    callback = dispatcher.register.mock.calls[0];
    console.log(dispatcher);
  });

  it ('should initialize with a user total of 0', () => {
    const newsStore = new NewsStore();
    const articles = newsStore.getArticles();
    expect(articles.length).toEqual(0);
  });
});