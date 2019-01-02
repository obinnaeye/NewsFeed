import axios from 'axios';
import appDispatcher from '../dispatcher/AppDispatcher';


 /**
   * @desc handles actions dispatched by dispatcher
   * @returns {void}
   */
const NewsActions = {

  /**
 * @desc makes api call to newsapi.org and dispatches GET_NEWS action and news articles
 * @returns {function} axios call
 * @param {object} newsSource the source of the news
 * @memberof NewsActions
 */
  getNews: (newsSource) => {
    let articles = [];
    return axios.get(`https://newsapi.org/v1/articles?
      apiKey=${process.env.APIKey}
      &source=${newsSource.source}
      &sortBy=${newsSource.sortBy}`)
    .then((data) => {
      articles = data.data.articles;
      appDispatcher.dispatch({
        type: 'GET_NEWS',
        articles,
      });
    }).catch(error => error,
    );
  },

/**
 * @desc makes api call to newsapi.org
 * and dispatches GET_SOURCES action and news sources
 * @returns {function} axios call
 * @memberof NewsActions
 */
  getSource: () => {
    const options = [];
    const rawSource = [];
    return axios('https://newsapi.org/v1/sources').then((data) => {
      const newsSources = data.data.sources;
      newsSources.forEach((source) => {
        rawSource.push(source);
        options.push(
          { value: source.id,
            label: source.name,
            sortBy: source.sortBysAvailable });
      });

      const sources = {
        options,
        rawSource,
      };
      appDispatcher.dispatch({
        type: 'GET_SOURCES',
        sources,
      });
    });
  },
};

export default NewsActions;
