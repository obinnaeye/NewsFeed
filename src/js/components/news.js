import React from 'react';

class News extends React.Component {
  render(){
    return(
      <li class="flex-item">
        <p class="news-title">{this.props.title}</p>
        <p class="news-description">{this.props.description}</p>
        <a href={this.props.href} target="_blank"> <i href={this.props.href} class="fa fa-external-link" /></a>
      </li>
    );
  }
}

module.exports = News;