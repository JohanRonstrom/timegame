import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Scene from "./components/scene";
import Dev from "./components/dev";

function App() {
  return (
    <Router>
      <div className="game">
        <Route path="/scene/:id" component={Scene} />
        <Route path="/dev/:action/:parameter?" component={Dev} />
      </div>
    </Router>
  );
}

export default App;
