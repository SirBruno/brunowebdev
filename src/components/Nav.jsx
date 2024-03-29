import React from 'react';
import styles from '../css/Nav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-bruno-pereira.svg';
import FullScreenMenu from './FullScreenMenu.jsx';

class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      navStatus: false
    }

    this.navToggle = this.navToggle.bind(this);
  }

  navToggle = () => {
    this.setState({
      navStatus: !this.state.navStatus,
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className={styles.navWrapper}>
            <img src={Logo} className={styles.brandLogo} alt="logo" />
            <ul id={styles.navDesktop} className={styles.navMenu}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
            <i onClick={this.navToggle} className={`${styles.navMenuIcon} fas fa-bars`}></i>
          </div>
        </nav>
        <FullScreenMenu navToggle={this.navToggle} navShow={this.state.navStatus} />
      </div>
    )
  }
}

export default Nav;