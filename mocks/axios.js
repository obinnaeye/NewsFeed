import mockdata from './mockData.json';

const mockApiCall = {
  get() {
    return Promise.resolve(mockdata);
  }
};

export default mockApiCall;
