import React from 'react';
import styles from '../css/FullScreenMenu.module.css';
import { Link } from 'react-router-dom';

class FullScreenMenu extends React.Component {
  render() {

    if (this.props.navShow) {
      return (
        <div>
          <nav class={`${styles.navMenu} ${styles.navMenuOff}`}>
            <div>
              <ul>
                <li><Link onClick={() => (this.props.navToggle())} to="/">Home</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>
          </nav>
          <i onClick={() => (this.props.navToggle())} className={`${styles.navMenuIcon} fas fa-times`}></i>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default FullScreenMenu;