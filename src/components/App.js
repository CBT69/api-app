import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const ApiKey = '5f7a40be54ae17012b313807821a52cb'     //Key for API access

class App extends Component {

  state = {   //empty strings for inseting the valu of input event
    value: '',   
    date: '',
    city: '',
    temp: '',
    wind: '',
    pressure: '',
    sunrise: '',
    sunset: '',
    err: '',
  }

  // method for operating input value beeing passed
  handleInputChange = (e) => { 
    this.setState({     //event takes the value to set State
      value: e.target.value
    })
  }

  // method for submitting form event and extracting API data
  handleCitySubmit = (e) => {
    e.preventDefault()
    const API = 
    `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${ApiKey}&units=metric`;

    fetch(API)    //asynchronic method promissing result from server
    .then(response => {
      if(response.ok) {   //check response status
        return response
      }
      throw Error("No match found") //error message
    })
      //extracting Json data format
    .then(response => response.json())  
    .then(data => {
      const time = new Date().toLocaleString()
      //except time and city name data is from API returning new object
      this.setState(prevState => ({
        value: '',   
        date: time,
        city: this.state.value,
        temp: data.main.temp,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        err: false
      }))
    }) 
    // message for input error or not matching database
    .catch(err => {
      console.log(err);
      this.setState(prevState => ({
        err: true,
        city: prevState.value
      }))
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
          <Form 
          value={this.state.value} 
          change={this.handleInputChange} 
          submit={this.handleCitySubmit}
          />
          <Result weather={this.state} />
        </div>
      </div>
    );
  } 
}

export default App;
