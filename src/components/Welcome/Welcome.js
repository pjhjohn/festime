import React, { Component } from 'react';

import logo from './../../assets/images/logo.svg';
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="Welcome-header">
          <img src={logo} className="Welcome-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Welcome-intro">
          To get started, edit <code>src/Welcome.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Welcome;
