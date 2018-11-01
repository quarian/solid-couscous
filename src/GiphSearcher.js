import React, { Component } from 'react';
import SearchButton from "./SearchButton";
import GiphContainer from "./GiphContainer";

class GiphSearcher extends Component {
  render() {
    return (
      <div className="GiphSearcher">
        Giph Seacher
        <SearchButton category={this.props.category} />
        <GiphContainer />
      </div>
    );
  }
}

export default GiphSearcher;