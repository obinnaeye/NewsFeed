import mockdata from './mockData.json';

/**
 * @desc creates a mock api call used for testing actions and stores
 * @return {void}
 */
const mockApiCall = {


  /**
   * @desc returns a mock data for test purposes
   * @returns {object} promise which resolves to the mock data
   * @memberof mockApiCall
   */
  get() {
    return Promise.resolve(mockdata);
  },
};

export default mockApiCall;
