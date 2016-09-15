import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleSpin } from './../../actions/toggleSpin';

import Welcome from './../../components/Welcome/Welcome';

import './Home.css';

class Home extends Component {
  static propTypes = {
    cw: PropTypes.bool.isRequired
  };

  static defaultProps = {
    cw: true
  };

  render() {
    return (
      <div className="Home">
        <Welcome cw={this.props.cw} onClick={() => this.props.toggleSpin()}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cw: state.cw
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSpin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);