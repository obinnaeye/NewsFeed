import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img class={this.props.class} src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}


module.exports = Logo;
