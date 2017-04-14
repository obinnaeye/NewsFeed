import React from 'react';

class HomeImage extends React.Component {
  render() {
    return (
      <div class="container">     
        <img src={this.props.src} class="img-responsive home" alt={this.props.alt} /> 
      </div>
    );
  }
}


module.exports = HomeImage;
