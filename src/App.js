import React, { Component } from 'react';
import GiphSearcher from "./GiphSearcher";
import './App.css';

const categories = ["cat", "dog"];

class App extends Component {
  render() {
    return (
      <div className="App">
        {categories.map((category, index) => {
          return <GiphSearcher key={index} category={category} />;
        })}
      </div>
    );
  }
}

export default App;
