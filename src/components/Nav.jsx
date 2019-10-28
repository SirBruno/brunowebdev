import React from 'react';
import styles from '../css/Nav.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Logo from '../assets/logo-bruno-pereira.svg';
import Contato from './Contato.jsx';
import FullScreenMenu from './FullScreenMenu.jsx';

class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      navStatus: 'navHide'
    }

    this.navOpen = this.navOpen.bind(this);
  }

  navOpen (e) {
    e.stopPropagation();
    this.setState({
      navStatus: 'navHide'
    });
  }

  navShow (e) {
    e.stopPropagation();
    this.setState({
      navStatus: 'navShow'
    });
  }


  render() {
    
    return (
      <Router>
        <nav>
          <div className={styles.navWrapper}>
            <img src={Logo} className={styles.brandLogo} alt="logo" />
            <ul id="nav-mobile" className={styles.navMenu}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
            <i onClick={this.navShow} className={`${styles.navMenuIcon} fas fa-bars`}></i>
          </div>
        </nav>
        <FullScreenMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Nav;