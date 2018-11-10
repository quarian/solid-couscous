import React, { Component } from 'react';
import GiphSearcher from "./GiphSearcher";
import Input from "./Input";

class CategorySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["cat"]
    };
  }

  addCategory = (category) => {
    const newCategories = [];
    Object.assign(newCategories, this.state.categories).push(category);
    this.setState({ categories: newCategories });
  }

  render() {
    return (
      <div className="CategorySearch">
        <h2 className={"Header"}>Amazing Giph Search tool!</h2>
        <Input addCategory={this.addCategory} />
        {this.state.categories.map((category, index) => {
          return <GiphSearcher key={index} category={category} />;
        })}
      </div>
    );
  }
}

export default CategorySearch;