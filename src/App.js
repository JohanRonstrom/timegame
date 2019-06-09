import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Scene from "./components/scene";

function App() {
  return (
    <Router>
      <div className="game">
        <Route path="/scene/:id" component={Scene} />
      </div>
    </Router>
  );
}

export default App;
