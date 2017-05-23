/* global expect, describe, beforeEach, it, afterEach */
// import expect from 'expect';
import sinon from 'sinon';
import axios from 'axios';
import mockCall from '../../mocks/axios';
import NewsActions from '../../src/js/actions/NewsActions';
import appDispatcher from '../../src/js/dispatcher/AppDispatcher';

describe('NewsActions to get news', () => {
  let spyNews;
  let newsStub;

  beforeEach(() => {
    newsStub = sinon.stub(axios, 'get').callsFake(mockCall.get);
    spyNews = sinon.spy(appDispatcher, 'dispatch');
  });

  afterEach(() => {
    spyNews.reset();
    spyNews.restore();
    newsStub.restore();
  });

  it('Should call dispatch with correct arguments', () => {
    NewsActions.getNews('abc-news').then(() => {
      expect(spyNews.callCount).toBe(1);
      expect(spyNews.firstCall.args[0].eventName).toBe('GET_NEWS');
    });
  });
});

describe('NewsActions to get News Sources', () => {
  let spyNews;
  let newsStub;

  beforeEach(() => {
    newsStub = sinon.stub(axios, 'get').callsFake(mockCall.get);
    spyNews = sinon.spy(appDispatcher, 'dispatch');
  });

  afterEach(() => {
    spyNews.reset();
    spyNews.restore();
    newsStub.restore();
  });

  it('Should call dispatch with correct arguments', () => {
    NewsActions.getSource().then(() => {
      expect(spyNews.callCount).toBe(1);
      expect(spyNews.firstCall.args[0].eventName).toBe('GET_SOURCES');
    });
  });
});
