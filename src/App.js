import React, { Component } from 'react';
import Frame from './containers/Frame/Frame';
// import Block from './components/Block/Block';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{'color': 'white'}}>and now heres john with the weather.</h1>
        <Frame/>
      </div>
    );
  }
}

export default App;
