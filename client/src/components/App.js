import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import About from "./about"

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
