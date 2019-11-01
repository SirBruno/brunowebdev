import React, { Component } from 'react';
import styles from '../css/Contato.module.css';
import Nav from './Nav.jsx';
import IMG1 from '../assets/agadRLy98h.jpg';
import '../css/Generic.css';

class Contato extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.section}>

          {/* ##### <SECTION 1> ##### */}
          <div className={styles.innerSection}>

            <div className={styles.innerSectionContent}>
              <div className={`${styles.contactRow} tal`}>
                <span className={styles.contactTitle}>Telefone:</span>
                <p>(19) 97115 9735</p>
              </div>
              <div className={`${styles.contactRow} tal`}>
                <span className={styles.contactTitle}>Email:</span>
                <p>bruno.webjr@gmail.com</p>
              </div>
              <div className={`${styles.contactRow} tal`}>
                <span className={styles.contactTitle}>Social networks:</span>
                <p className={styles.socialNetworks}>
                  <a href="https://www.linkedin.com/in/sirbruno/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/bruno.webjr/" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </p>
              </div>
            </div>

            <div className={`${styles.innerSectionContent} hideMobile`}>
              <div className={`${styles.contactRow} tar`}>
                <img src={IMG1} alt="laptop" />
              </div>
            </div>

          </div>
          {/* ##### </SECTION 1> ##### */}

        </div>
        <div className={styles.section}>
          <div className={styles.innerSection}>
            <p>new section</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contato;