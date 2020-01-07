import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
// hydrate(<App />, rootElement);
// console.log('hydrate')
// if (rootElement.hasChildNodes()) {
// } else{
//   render(<App />, rootElement);
//   console.log('render')

// }
// ReactDOM.render(<App />, document.getElementById("root"))
// ReactDOM.render(<App />, rootElement);
  render(<App />, rootElement);
