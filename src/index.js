import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else{
  render(<App />, rootElement);
}
// ReactDOM.render(<App />, document.getElementById("root"))
// ReactDOM.render(<App />, rootElement);
