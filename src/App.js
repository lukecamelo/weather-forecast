import React, { Component } from 'react';
import Frame from './containers/Frame/Frame';
import Form from './components/Form';
// import Block from './components/Block/Block';
import './App.css';

const API_KEY = 'b7ed1afa86c47e8f23a654b41b195fc5';

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <h1 style={{'color': 'white'}}>and now heres john with the weather.</h1>
        <Form getWeather={this.getWeather} />  
        <Frame/>
      </div>
    );
  }
}

export default App;
