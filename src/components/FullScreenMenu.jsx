import React from 'react';
import styles from '../css/FullScreenMenu.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class FullScreenMenu extends React.Component {
  render() {

    return (
      <div>
        <nav class={`${styles.navMenu} ${styles.navMenuOff}`}>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
        </nav>
        <i className={`${styles.navMenuIcon} fas fa-times`}></i>
      </div>
    )
  }
}

export default FullScreenMenu;