import * as SourceStore from '../../src/js/stores/SourceStore';
import appDispatcher from '../../src/js/dispatcher/AppDispatcher';
import mockedSources from '../../mocks/mockData.json';

/* eslint-disable no-undef, comma-dangle */
jest.mock('../../src/js/dispatcher/AppDispatcher');
jest.dontMock('../../src/js/stores/SourceStore');

describe('SourceStore', () => {
  // sample data for callback
  const mockDispatch = {
    type: 'GET_SOURCES',
    articles: mockedSources
  };

  let callback;

  beforeEach(() => {
    callback = appDispatcher.register.mock.calls[0][0];
  });

  test('registers a callback with the dispatcher', () => {
    expect(appDispatcher.register.mock.calls.length).toBe(1);
  });

  test('initializes with no data', () => {
    const count = SourceStore.default.sources.length;
    expect(count).toBe(0);
  });

  test('should call "setSource" when "GET_SOURCES" is dispatched', () => {
    const spyStore = jest.spyOn(SourceStore.default, 'setSource');
    callback(mockDispatch);
    expect(spyStore).toHaveBeenCalled();
  });
});
