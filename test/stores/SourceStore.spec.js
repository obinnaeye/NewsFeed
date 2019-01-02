/* global describe, expect, beforeEach, jest, test */
import SourceStore from '../../src/js/stores/SourceStore';
import appDispatcher from '../../src/js/dispatcher/AppDispatcher';
import mockedSources from '../mocks/mockData.json';

jest.mock('../../src/js/dispatcher/AppDispatcher');
jest.dontMock('../../src/js/stores/SourceStore');

describe('SourceStore', () => {
  // sample data for callback
  const mockDispatch = {
    type: 'GET_SOURCES',
    sources: mockedSources,
  };

  let callback;

  beforeEach(() => {
    callback = appDispatcher.register.mock.calls[0][0];
  });

  test('registers a callback with the dispatcher', () => {
    expect(appDispatcher.register.mock.calls.length).toBe(1);
  });

  test('initializes with no data', () => {
    const count = SourceStore.sources.length;
    expect(count).toBe(0);
  });

  test('should call "setSource" when "GET_SOURCES" is dispatched', () => {
    const spyStore = jest.spyOn(SourceStore, 'setSource');
    callback(mockDispatch);
    expect(spyStore).toHaveBeenCalled();

    const response = spyStore.mock.calls[0][0];
    expect(response).toBeDefined();
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(mockedSources.data);
    expect(response.data.sources).toEqual(mockedSources.data.sources);
  });
});
