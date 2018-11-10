import React, { Component } from 'react';
import { fetchGiph } from './fetchUtils';

class FullScreenSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: undefined
    };
  }

  setUrl = url => {
    this.setState({ inputValue: this.state.inputValue, imageUrl: url });
  }

  render() {
    const style = {
      "backgroundImage": "url(" + this.state.imageUrl + ")",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "backgroundSize": "cover"
    };
    return (
      <div className="Input-Fullscreen" style={style}>
        <input onChange={(event) => fetchGiph(event.target.value, this.setUrl)} />
      </div>
    );
  }
}

export default FullScreenSearch;