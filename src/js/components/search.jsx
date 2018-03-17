// @flow

import React, { Component } from 'react';
import propTypes from 'prop-types';

type Props = {
  placeholder: string,
};

type State = {
  searchTerm?: string,
};

class Search extends Component<Props, State> {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = (event: SyntheticInputEvent<>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <input
          placeholder={this.props.placeholder}
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
      </div>
    );
  }
}

Search.propTypes = {
  placeholder: propTypes.string.isRequired,
};

export default Search;
