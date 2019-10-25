import React from 'react';
import '../css/Nav.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home.jsx';

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <div className="nav-wrapper">
            <span className="brand-logo">Logo</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Nav;