import React, { Component } from 'react';
import GiphSearcher from "./GiphSearcher";
import './App.css';

const searchTerms = ["cat", "dog"];

class App extends Component {
  render() {
    return (
      <div className="App">
        {searchTerms.map(term => {
          return <GiphSearcher />;
        })}
      </div>
    );
  }
}

export default App;
