import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

const App = () => (
  <Router>
    <div className="container">
      <div>Name: auth</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
