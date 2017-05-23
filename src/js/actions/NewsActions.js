import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
/**
 * @desc actions.
 *
 * @returns {void}
 */
const NewsActions = {
  getNews: (newsSource) => {
    let articles = [];
    return axios.get(`https://newsapi.org/v1/articles?apiKey=${process.env.APIKey}&source=${newsSource.source}&sortBy=${newsSource.sortBy}`)
    .then((data) => {
      articles = data.data.articles;
      dispatcher.dispatch({
        type: 'GET_NEWS',
        articles,
      });
    }).catch(error => error,
    );
  },

/**
 * @desc actions that dispatches GET_SOURCE
 *
 * @returns {void}
 */
  getSource: () => {
    const options = [];
    const rawSource = [];
    return axios('https://newsapi.org/v1/sources').then((data) => {
      const newsSources = data.data.sources;
      newsSources.forEach((source) => {
        rawSource.push(source);
        options.push({ value: source.id, label: source.name, sortBy: source.sortBysAvailable });
      });
      /* eslint-disable comma-dangle */
      const sources = {
        options,
        rawSource
      };
      dispatcher.dispatch({
        type: 'GET_SOURCES',
        sources,
      });
    });
  },
};

export default NewsActions;
