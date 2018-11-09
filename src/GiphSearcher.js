import React, { Component } from 'react';
import SearchButton from "./SearchButton";
import GiphContainer from "./GiphContainer";

class GiphSearcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null
    };
  }

  setUrl = (url) => {
    this.setState({ url });
  }

  render() {
    return (
      <div className="GiphSearcher">
        <div>Giph Searcher for a {this.props.category}!</div>
        <SearchButton category={this.props.category} setUrl={this.setUrl} />
        <GiphContainer url={this.state.url} />
      </div>
    );
  }
}

export default GiphSearcher;