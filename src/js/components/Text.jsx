// @flow
import React, { Component } from 'react';

type Props = {
  textLine?: string,
};

class Text extends Component<Props> {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="text">
        <p>{this.props.textLine}</p>
      </div>
    );
  }
}

export default Text;
