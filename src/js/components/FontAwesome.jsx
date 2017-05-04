import React from 'react';

class FontAwesome extends React.Component {
  render() {
    return (
      <i className={this.props.name} aria-hidden="true" />
    );
  }
}

export default FontAwesome;
