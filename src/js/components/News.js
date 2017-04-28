import React from 'react';

class News extends React.Component {
  render(){
    return(
      <li className="flex-item">
        <img src={this.props.src} />
        <span class="news-title">{this.props.title}</span>
        <a href={this.props.href} target="_blank"> <i class="fa fa-external-link" /></a>
      </li>
    );
  }
}

module.exports = News;