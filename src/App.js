import React, { Component } from 'react';
import Frame from './containers/Frame/Frame';
// import Form from './components/Form';
// import Block from './components/Block/Block';
import './App.css';

const API_KEY = 'b7ed1afa86c47e8f23a654b41b195fc5';

class App extends Component {

  state = {
    temperature: undefined,
    city: 'City',
    country: 'Country',
    description: undefined,
    iconCode: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    // stops the browser from refreshing when get weather button is clicked.
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // converts API data to json
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      iconCode: data.weather[0].icon,
      error: ''
    });
  }

  render() {
    return (
      <div className="App">
        {/* <h1 style={{'color': 'white'}}>{this.state.city}, {this.state.country}, {this.state.description}</h1>
        <img src={"http://openweathermap.org/img/w/" + this.state.iconCode + ".png"} alt=""/>
        <Form getWeather={this.getWeather} />   */}
        <Frame 
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        iconCode={this.state.iconCode}
        getWeather={this.getWeather}/>
      </div>
    );
  }
}

export default App;
