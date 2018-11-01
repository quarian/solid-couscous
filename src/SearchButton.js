import React, { Component } from 'react';
import { fetchGiph } from './fetchUtils';

const callback = (url) => {
  console.log(url);
}

class SearchButton extends Component {
  render() {
    return (
      <div className="SearchButton">
        <button onClick={() => fetchGiph(this.props.category, callback)}>
          {this.props.category}
        </button>
      </div>
    );
  }
}

export default SearchButton;