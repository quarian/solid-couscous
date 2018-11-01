import React, { Component } from 'react';
import GiphSearcher from "./GiphSearcher";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["cat", "dog", "pie", "skifree"]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.categories.map((category, index) => {
          return <GiphSearcher key={index} category={category} />;
        })}
      </div>
    );
  }
}

export default App;
