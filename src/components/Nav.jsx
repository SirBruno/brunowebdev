import React from 'react';
import styles from '../css/Nav.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home.jsx';
import Logo from '../assets/logo-bruno-pereira.svg';

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <div className={styles.navWrapper}>
            <img src={Logo} className={styles.brandLogo} alt="logo" />
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