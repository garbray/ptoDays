import React from 'react';
import propTypes from 'prop-types';

const Text = props => (
  <div className="text">
    <p>{props.textLine}</p>
  </div>
);

Text.propTypes = {
  textLine: propTypes.string.isRequired,
};

export default Text;
