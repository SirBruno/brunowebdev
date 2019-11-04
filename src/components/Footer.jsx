import React, { Component } from 'react';
import styles from '../css/Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerOuter}>
        <div className={styles.footer}>
          <div className={styles.footerCol}>
            <h4>YOOOOOOO dude</h4>
          </div>
          <div className={styles.footerCol}>
            <h4>TEXT</h4>
          </div>
          <div className={styles.footerCol}>
            <h4>TEXT</h4>
          </div>
          <div className={styles.footerCol}>
            <h4>TEXT</h4>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;