import React from 'react';

class News extends React.Component {
  render(){
    return(
      <div class="news-box">
        <h4 class="news-title">{this.props.title}</h4>
        <h4 class="news-description">{this.props.description}</h4>
        <a href={this.props.href} target="_blank"> <i href={this.props.href} class="fa fa-external-link" /></a>
      </div>
    );
  }
}

module.exports = News;