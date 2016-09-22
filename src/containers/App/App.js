import React, {Component} from 'react';
import { Container } from 'react-grid-system';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import Footer from './Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          <Container>
            {this.props.children}
          </Container>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
