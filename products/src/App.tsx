import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

const App = () => (
  <div className="container">
    <div>Name: products</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
