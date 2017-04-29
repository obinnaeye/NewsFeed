import React from 'react';

class News extends React.Component {
  render(){
    return(
      <li className="flex-item">
        <img src={this.props.src} />
        <span className="news-title">{this.props.title}</span>
        <a href={this.props.href} target="_blank"> <i className="fa fa-external-link" /></a>
      </li>
    );
  }
}

module.exports = News;