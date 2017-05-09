import * as newsActions from '../../src/js/actions/newsActions';
import Dispatcher from '../../src/js/dispatcher/dispatcher';

/*eslint-disable*/
describe('NewsAction', () => {
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(Dispatcher, 'dispatch');
  });

  afterEach(() => {
    spy.mockReset();
  });

  it('should dispatch  "GET_NEWS" when getNews is called', () => {
    newsActions.getNews({ source: 'al-jazeera-english', sortby: 'top' });
    const mockDispatchCall = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(mockDispatchCall.type).toEqual('GET_NEWS');
    expect(mockDispatchCall.obj).toEqual({ source: 'al-jazeera-english', sortby: 'top' });
  });

  it('should dispatch  "SORT_NEWS" when sortNews is called', () => {
    newsActions.sortNews({ source: 'al-jazeera-english', sortby: 'top' });
    const mockDispatchCall = spy.mock.calls[0][0];
    expect(spy).toHaveBeenCalled();
    expect(mockDispatchCall.type).toEqual('SORT_NEWS');
    expect(mockDispatchCall.obj).toEqual({ source: 'al-jazeera-english', sortby: 'top' });
  });
});
