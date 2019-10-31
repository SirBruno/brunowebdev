import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    )
  }
}

export default Home;