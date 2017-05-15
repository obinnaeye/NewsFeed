import React from 'react';
import NavBar from '../components/NavBar.jsx';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';
import News from '../components/News';
import * as NewsActions from '../actions/newsActions';
import NewsStore from '../stores/newsStore';
import Footer from '../components/Footer';

/**
 * @class NewsPage
 * @extends {React.Component}
 */
class NewsPage extends React.Component {
  /**
   * Creates an instance of NewsPage.
   * @param {any} props
   * @memberOf NewsPage
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sources: [],
      rawSource: [],
      currentValue: { value: 'al-jazeera-english', label: 'Al Jazeera English', sortby: ['top', 'latest'] },
      sortBy: ['top', 'latest'],
      currentSort: '',
    };
    this.getSource = this.getSource.bind(this);
    this.getValue = this.getValue.bind(this);
    this.searchNews = this.searchNews.bind(this);
    this.sortAction = this.sortAction.bind(this);
    this.getSorts = this.getSorts.bind(this);
  }

  componentWillMount() {
    NewsStore.on('change', () => {
      this.setState({
        articles: NewsStore.getArticles(),
      });
    });
  }

  componentDidMount() {
    this.getSource();
    NewsActions.getNews({ source: 'al-jazeera-english', sortby: 'top' });
  }

  /**
   * @memberOf NewsPage
   * @returns {void}
   */
  getSource() {
    const { options } = NewsStore.getSource();
    const { rawSource } = NewsStore.getSource();
    this.setState({
      sources: options,
      rawSource,
    }, () => {});
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
        sortBy: value.sortby,
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
      const sortby = this.state.sortBy.length > 1 && this.state.currentSort ?
      this.state.currentSort : this.state.sortBy[0];
      NewsActions.getNews({ source, sortby });
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
      const sortby = e.target.value;
      NewsActions.sortNews({ source, sortby });
      this.setState({
        currentSort: sortby,
      });
    };
  }

  /**
   * @returns {element} div
   *
   * @memberOf NewsPage
   */
  render() {
    const news = this.state.articles;
    const NewsComponents = news.map((item, i) => {
      let title;
      if (item.title.length > 60) {
        title = `${item.title.slice(0, 56)}...`;
      } else {
        title = item.title;
      }
      const key = i;
      return <News key={key} title={title} href={item.url} src={item.urlToImage} />;
    });

    return (
      <div>
        <NavBar />
        <SearchBar
          sources={this.state.sources}
          value={this.state.currentValue}
          onchange={this.getValue}
          onclick={this.searchNews}
          sorts={this.getSorts()}
          sortAction={this.sortAction()}
        />
        <NewsList news={NewsComponents} />
        <Footer />
      </div>
    );
  }
}

export default NewsPage;
