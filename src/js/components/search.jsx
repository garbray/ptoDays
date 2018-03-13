import React from 'react';
import propTypes from 'prop-types';

const Search = (props) => (
  <div className="search">
    <input placeholder={props.placeholder}/>
  </div>
);

Search.propTypes = {
  placeholder: propTypes.string.isRequired,
}

export default Search;
