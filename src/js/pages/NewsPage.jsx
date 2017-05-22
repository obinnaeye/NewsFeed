import React from 'react';
import NavBar from '../components/NavBar';
import SourceBar from '../components/SourceBar';
import NewsList from '../components/NewsList';
import News from '../components/News';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import SourceStore from '../../js/stores/SourceStore';
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

    SourceStore.on('sources', () => {
      const { options, rawSource } = SourceStore.sources;
      const randomIndex = Math.floor((Math.random() * (options.length - 1)));
      const randomSource = options[randomIndex];
      this.setState({
        sources: options,
        rawSource,
        currentValue: randomSource,
        sortBy: randomSource.sortby,
      }, () => {
        NewsActions.getNews({ source: randomSource.value, sortby: randomSource.sortby[0] });
      });
    });

    NewsActions.getSource();
  }

/**
   * @desc the events that occur when the component has mounted
   * @param {void}
   * @return {void}
   * @memberOf NewsPage
   */
  // componentDidMount() {
  //   NewsActions.getSource();
  //   const sorces = this.state.sources;
  //   console.log(sorces);
  //   NewsActions.getNews({ source: 'al-jazeera-english', sortby: 'top' });
  // }

  getNews(){
    console.log(this.state)
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
      NewsActions.getNews({ source, sortby });
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
      <div className="wrapper">
        <NavBar />
        <SourceBar
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
