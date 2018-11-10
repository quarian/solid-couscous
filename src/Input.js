import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  setCategory = category => {
    this.setState({ inputValue: category })
  }

  render() {
    return (
      <div className="Input">
        <input onChange={(event) => this.setCategory(event.target.value) } />
        <button onClick={() => this.props.addCategory(this.state.inputValue)}>Add Category</button>
      </div>
    );
  }
}

export default Input;