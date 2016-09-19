import React, { Component, PropTypes } from 'react';
import { Container } from 'react-grid-system';

import { Tabs, Tab } from 'material-ui/Tabs';
import { getMuiTheme } from 'material-ui/styles'

import './Header.scss';

const styles = {
  header: {
    width: `100%`,
    backgroundColor: getMuiTheme().palette.primary1Color
  },
};

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        <Container>
          <Tabs>
            <Tab label="TimeTable" onActive={() => this.context.router.push("/timetable") }/>
            <Tab label="My TimeTable" onActive={() => this.context.router.push("/mytimetable") }/>
          </Tabs>
        </Container>
      </div>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object
};

export default Header;
