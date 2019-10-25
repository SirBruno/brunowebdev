import React from 'react';
import '../css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="main-div">
        <div className="content"><h3><b>Lorem ipsum</b> dolor sit amet</h3></div>
        <div className="content"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></div>
        <span><a class="waves-effect waves-light btn-large bg-orange-hvr">Button</a></span>
      </div>
    )
  }
}

export default Home;