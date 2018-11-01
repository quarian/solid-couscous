import React, { Component } from 'react';
import { fetchGiph } from './fetchUtils';

class SearchButton extends Component {
  render() {
    return (
      <div className="SearchButton">
        <button onClick={() => fetchGiph(this.props.category, this.props.setUrl)}>
          Find a {this.props.category} giph!
        </button>
      </div>
    );
  }
}

export default SearchButton;