import React from 'react';
import NavBar from '../components/NavBar';
import SourceBar from '../components/SourceBar';
import NewsList from '../components/NewsList';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import SourceStore from '../../js/stores/SourceStore';
import Footer from '../components/Footer';

/**
 * @desc renders a page containing all components on /news page
 * @class NewsPage
 * @param {void}
 * @extends {React.Component}
 * @return {element} a rendered element on the DOM
 */
class NewsPage extends React.Component {
  /**
   * Creates an instance of NewsPage.
   * @param {object} props the component props
   * @memberOf NewsPage
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sources: [],
      rawSource: [],
      currentValue: {},
      sortBy: [],
      currentSort: '',
    };
    this.getValue = this.getValue.bind(this);
    this.searchNews = this.searchNews.bind(this);
    this.sortAction = this.sortAction.bind(this);
    this.getSorts = this.getSorts.bind(this);
  }

  /**
   * @desc the events that occur before the component mounts
   * @param {void}
   * @return {void}
   * @memberOf NewsPage
   */
  componentDidMount() {
    NewsStore.on('change', () => {
      this.setState({
        articles: NewsStore.articles,
      });
    });

    SourceStore.on('change', () => {
      const { options, rawSource } = SourceStore.sources;
      const randomIndex = Math.floor((Math.random() * (options.length - 1)));
      const randomSource = options[randomIndex];
      this.setState({
        sources: options,
        rawSource,
        currentValue: randomSource,
        sortBy: randomSource.sortBy,
      }, () => {
        NewsActions.getNews({ source: randomSource.value, sortBy: randomSource.sortBy[0] });
      });
    });

    NewsActions.getSource();
  }

  /**
   * @param {object} value
   * @memberOf NewsPage
   * @return {void}
   */
  getValue(value) {
    if (value) {
      this.setState({
        currentValue: value,
        sortBy: value.sortBy,
      }, () => { this.searchNews(); });
    }
  }
  /**
   * @return {object} sorts
   *
   * @memberOf NewsPage
   */
  getSorts() {
    const sorts = this.state.sortBy;
    if (sorts) {
      const renderSorts = sorts.map((sort, i) => {
        const key = i;
        return <option key={key} value={sort}>{sort}</option>;
      });
      return renderSorts;
    }
    return sorts;
  }

  /**
   * @return {void}
   * @memberOf NewsPage
   */
  searchNews() {
    const source = this.state.currentValue.value ? this.state.currentValue.value : '';
    if (source) {
      // check if sortBysAvailable is more than one and currentSort exists in state
      const sortBy = this.state.sortBy.length > 1 && this.state.currentSort ?
      this.state.currentSort : this.state.sortBy[0];
      NewsActions.getNews({ source, sortBy });
    }
  }

  /**
   * @returns {void}
   *
   * @memberOf NewsPage
   */
  sortAction() {
    return (e) => {
      const source = this.state.currentValue.value;
      const sortBy = e.target.value;
      NewsActions.getNews({ source, sortBy });
      this.setState({
        currentSort: sortBy,
      });
    };
  }

  /**
   * @returns {element} div
   *
   * @memberOf NewsPage
   */
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <SourceBar
          sources={this.state.sources}
          value={this.state.currentValue}
          onChange={this.getValue}
          onClick={this.searchNews}
          sorts={this.getSorts()}
          sortAction={this.sortAction()}
        />
        <NewsList news={this.state.articles} />
        <Footer />
      </div>
    );
  }
}

export default NewsPage;
