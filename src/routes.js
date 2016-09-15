import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App/App';
import Home from './containers/Home/Home';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
    <Route path="*" component={(props) =>
      <div style={{padding: "20px", textAlign: "center"}}>
        <span>404 Not Found</span><br/>
        <span>No route matches to this path. Make your Error404 Component later</span>
      </div>
    }/>
  </Route>
);
