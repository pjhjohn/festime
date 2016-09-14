import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './containers/App/App';
import './index.css';

import configureStore from './store/ConfigureStore';
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));
