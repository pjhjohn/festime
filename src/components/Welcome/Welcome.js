import React, { Component, PropTypes } from 'react';

import logo from './../../assets/images/logo.svg';
import './Welcome.css';

const inlineStyle = {
  cursor: 'pointer'
};

class Welcome extends Component {
  static propTypes = {
    cw: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div>
        <div className="Welcome-header">
          <a onClick={this.props.onClick} style={inlineStyle}>
            <img src={logo} className={`Welcome-logo-${this.props.cw? `cw` : `ccw`}`} alt="logo" />
          </a>
          <h2>Welcome to React</h2>
          <h4>{`It's spinning ${this.props.cw? `clockwise` : `counter-clockwise`}!! Click to toggle spin!`}</h4>
        </div>
        <p className="Welcome-intro">
          To get started, edit <code>src/Welcome.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Welcome;
