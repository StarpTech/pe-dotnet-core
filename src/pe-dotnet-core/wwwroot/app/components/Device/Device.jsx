import React from 'react';

export default class Device extends React.Component {
  render() {
    return (
      <div>
        <p className={this.props.className}>
          Device: {this.props.name}
        </p>
      </div>
    );
  }
}
