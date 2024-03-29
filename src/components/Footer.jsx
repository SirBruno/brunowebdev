import React, { Component } from 'react';
import styles from '../css/Footer.module.css';
import Logo from '../assets/logo-bruno-pereira.svg';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerOuter}>
        <div className={styles.footer}>
          <div className={styles.footerCol}>
            <img src={Logo} alt="Logo" />
            <div className={`${styles.contactRow} tal`}>
              <p className={styles.socialNetworks}>
                <a href="https://www.linkedin.com/in/sirbruno/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/bruno.webjr/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h4>Contato</h4>
            <p>Tel. (19) 97115 9735</p>
            <p>bruno.webjr@gmail.com</p>
            <p>Mogi Mirim, SP</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;