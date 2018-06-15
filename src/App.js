import React, { Component } from 'react';
import logo from './logo.svg';

import Dashboard from './components/Dashboard/Dashboard'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: [
        {
          name: 'left shoe',
          price: 1.298,
          image: 'leftshoe.url',
        },
        {
          name: 'squirrel',
          price: 19.69,
          image: 'squirrel.url',
        },
        {
          name: 'rice',
          price: 4.00,
          image: 'rice.url',
        },
      ],
      userInput1: '',
      userInput2: '',
      userInput3: ''
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
  
  testClick = () => {
    alert("Working!");
  }

  cancelHandler = () => {
    this.setState({
      userInput1: '',
      userInput2: '',
      userInput3: ''
    });
  }
  
  render() {
    const { onChangeHandler1, onChangeHandler2, onChangeHandler3, testClick, cancelHandler } = this;
    const { inventoryList, userInput1, userInput2, userInput3 } = this.state;

    return (
      <div className="App">
        <input
          placeholder="Input 1"
          value={ userInput1 }
          onChange={ onChangeHandler1 } />
        <input
          placeholder="Input 2"
          value={ userInput2 }
          onChange={ onChangeHandler2 } />
        <input
          placeholder="Input 3"
          value={ userInput3 }
          onChange={ onChangeHandler3 } />
        <button onClick={ testClick }>Add</button>
        <button onClick={ cancelHandler }>Cancel</button>
        <Dashboard list={ inventoryList } />
      </div>
    );
  }
}

export default App;
