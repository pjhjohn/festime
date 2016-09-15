import React, {Component} from 'react';
import { Container } from 'react-grid-system';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
