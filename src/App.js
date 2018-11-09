import React, { Component } from 'react';
import GiphSearcher from "./GiphSearcher";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["cat", "dog", "pie", "skifree"],
      styled: false
    };
  }

  enableStyles = () => {
    this.setState({ categories: this.state.categories, styled: !this.state.styled });
  }

  render() {
    return (
      <div className={this.state.styled ? "App-styled" : "App"}>
        <h2 className={this.state.styled ? "Header-styled" : "Header"}>Amazing Giph Search tool!</h2>
        {this.state.categories.map((category, index) => {
          return <GiphSearcher key={index} styled={this.state.styled} category={category} />;
        })}
        <button style={{ visibility: "hidden" }} onClick={this.enableStyles}>
          {this.state.styled ? "Remove styles" : "Style me!"}
        </button>
      </div>
    );
  }
}

export default App;
