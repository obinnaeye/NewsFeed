/* global expect, describe, beforeEach, it, afterEach */
import sinon from 'sinon';
import axios from 'axios';
import mockCall from '../mocks/axios';
import NewsActions from '../../src/js/actions/NewsActions';
import appDispatcher from '../../src/js/dispatcher/AppDispatcher';
import mockData from '../mocks/mockData.json';

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
      expect(spyNews.firstCall.args[0].type).toBe('GET_NEWS');
      expect(spyNews.firstCall.args[0].articles).toBe(mockData);
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
      expect(spyNews.firstCall.args[0].type).toBe('GET_SOURCES');
      expect(spyNews.firstCall.args[0].sources).toBe(mockData);
    });
  });
});
