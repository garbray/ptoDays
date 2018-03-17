// @flow
import React from 'react';

type Props = {
  textLine?: string,
};

const Text = (props: Props) => (
  <div className="text">
    <p>{props.textLine}</p>
  </div>
);

Text.defaultProps = {
  textLine: '',
};

export default Text;
