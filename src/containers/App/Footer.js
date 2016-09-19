import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { getMuiTheme } from 'material-ui/styles'

import './Footer.scss';

const styles = {
  footer: {
    width: `100%`,
    height: `60px`,
    position: `absolute`,
    bottom: 0,
    backgroundColor: getMuiTheme().palette.primary1Color,
    text: {
      color: getMuiTheme().palette.alternateTextColor,
      fontFamily: 'Roboto',
      margin: `20px 0`,
    },
  },
};

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <Container>
          <Row>
            <Col md={12}>
              <p style={styles.footer.text}>festime</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
