import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div id="header" className="main-div">
        <div className="content-box">
          <div className="content"><h1><b>Bruno Pereira</b></h1></div>
          <div className="content"><p><b>Desenvolvedor Web</b> em Mogi Mirim, SP</p></div>
        </div>
      </div>
    )
  }
}

export default Header;