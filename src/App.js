import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from '../src/MainComponent.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';
  import Home from '../src/home.js';
import School from '../src/school.js'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>With React-Snap</h2>
        </div>
        <Router>
          <Link to ="/">default</Link><br/>
          <Link to="/home">homes</Link><br />
          <Link to="/school">schools</Link><br />
          <Switch>
            <Route path="/"><MainComponent /></Route>
            <Route path="/school"><School /></Route>
            <Route path="/home"><Home/></Route>
          </Switch>   
        </Router>
      </div>
    );
  }
}

export default App;