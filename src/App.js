import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from '../src/MainComponent.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>With React-Snap</h2>
        </div>
        <MainComponent />
      </div>
    );
  }
}

export default App;
