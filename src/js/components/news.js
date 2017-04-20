import React from 'react';

class News extends React.Component {
  render(){
    return(
      <li class="flex-item">
        <img src={this.props.src} />
        <span class="news-title">{this.props.title}</span>
        <a href={this.props.href} target="_blank"> <i href={this.props.href} class="fa fa-external-link" /></a>
      </li>
    );
  }
}

module.exports = News;