import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: [],
      userInput1: "",
      userInput2: "",
      userInput3: ""
    };
  }

  onChangeHandler1 = (event) => {
    // console.log(event.target.value);
    this.setState({
      userInput1: event.target.value
    });
  }

  onChangeHandler2 = (event) => {
    // console.log(event.target.value);
    this.setState({
      userInput2: event.target.value
    });
  }

  onChangeHandler3 = (event) => {
    // console.log(event.target.value);
    this.setState({
      userInput3: event.target.value
    });
  }

  render() {
    const { onChangeHandler1, onChangeHandler2, onChangeHandler3 } = this;

    return (
      <div className="App">
        <input
          placeholder="Input 1"
          onChange={ onChangeHandler1 } />
        <input
          placeholder="Input 2"
          onChange={ onChangeHandler2 } />
        <input
          placeholder="Input 3"
          onChange={ onChangeHandler3 } />
      </div>
    );
  }
}

export default App;
