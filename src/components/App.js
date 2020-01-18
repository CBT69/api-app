import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

class App extends Component {

  state = {
    value: ""   //empty string for inseting the valu of event
  }

  // method for operating input
  handleInputChange = (e) => { 
    this.setState({     //event takes the value to set State
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Weather App
          </p>
        </header>
        <div className="Form">
          <Form value={this.state.value} change={this.handleInputChange} />
          <Result />
        </div>
      </div>
    );
  } 
}

export default App;
