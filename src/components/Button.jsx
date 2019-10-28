import React from 'react';
import styles from '../css/Button.module.css';

class Button extends React.Component {
  render() {
    return(
      <a className={styles.btn} href={this.props.link}>{this.props.name}</a>
    )
  }
}

export default Button;