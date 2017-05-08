import article from './article.json';
/*eslint-disable*/
const mockApiCall = {
  get() {
    return Promise.resolve(article);
  }
};

export default mockApiCall;
