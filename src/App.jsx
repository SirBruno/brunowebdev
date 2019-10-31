import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contato from './components/Contato.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;