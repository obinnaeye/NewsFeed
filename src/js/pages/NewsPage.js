import React from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';
import News from '../components/News';
import * as NewsActions from '../actions/newsActions';
import NewsStore from '../stores/newsStore';

class NewsPage extends React.Component {
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

  getSource() {
    const { options } = NewsStore.getSource();
    const { rawSource } = NewsStore.getSource();
    this.setState({
      sources: options,
      rawSource,
    }, () => {});
  }

  getValue(value) {
    if (value) {
      this.setState({
        currentValue: value,
        sortBy: value.sortby,
      }, () => { this.searchNews(); });
    }
  }

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

  searchNews() {
    const source = this.state.currentValue.value ? this.state.currentValue.value : '';
    if (source) {
      // check if sortBysAvailable is more than one and currentSort exists in state
      const sortby = this.state.sortBy.length > 1 && this.state.currentSort ?
      this.state.currentSort : this.state.sortBy[0];
      NewsActions.getNews({ source, sortby });
    }
  }

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

  render() {
    const news = this.state.articles;
    const NewsComponents = news.map((item, i) => {
      const key = i;
      return <News key={key} title={item.title} href={item.url} src={item.urlToImage} />;
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
      </div>
    );
  }
}

export default NewsPage;
