import React, { Component } from 'react';
import './App.css';
import FullScreenSearch from './FullScreenSearch';
import CategorySearch from './CategorySearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false
    };
  }

  render() {
    return (
      <div className={"App"}>
        <div>
          Fullscreen:
          <input type="checkbox" label="Fullscreen?" onChange={() => this.setState({ fullScreen: !this.state.fullScreen })} value={this.state.fullScreen} />
        </div>
        {this.state.fullScreen ?
          <FullScreenSearch />
          :
          <CategorySearch />
        }
      </div>
    );
  }
}

export default App;
