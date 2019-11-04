import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Home;