import React from 'react';

class News extends React.Component {
  render(){
    return(
      <div class="news-box">
        <h4 class="news-title">{this.props.title}</h4>
        <h4 class="news-brief">{this.props.brief}</h4>
        <i href={this.props.href} class="fa fa-external-link" />
      </div>
    );
  }
}