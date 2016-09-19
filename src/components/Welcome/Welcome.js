import React, { Component, PropTypes } from 'react';

import Toggle from 'material-ui/Toggle';

import logo from './../../assets/images/logo.svg';
import './Welcome.scss';

const styles = {
  roboto: {
    fontFamily: 'Roboto',
    fontWeight: '400'
  },
  toggle: {
    maxWidth: 200,
    margin: '0 auto',
    label: {
      color: 'white'
    }
  }
};

class Welcome extends Component {
  static propTypes = {
    cw: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div style={styles.roboto}>
        <div className="Welcome-header">
          <img src={logo} className={`Welcome-logo-${this.props.cw? `cw` : `ccw`}`} alt="logo" />
          <h2>Welcome to React</h2>
          <Toggle
            label={`${this.props.cw? `Clockwise` : `Counter Clockwise`}`}
            defaultToggled={this.props.cw}
            onToggle={this.props.onClick}
            style={styles.toggle}
            labelStyle={styles.toggle.label}
          />
        </div>
        <p className="Welcome-intro">
          To get started, edit <code>src/Welcome.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Welcome;
