import React, {Component} from 'react';
import { Container } from 'react-grid-system';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.scss';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Container>
            {this.props.children}
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
