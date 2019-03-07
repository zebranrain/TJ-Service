import React from 'react';

import App from './components/app.jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const analystratings = (
  <Router>
    <div>
      <Route path="/:ticker" component={App} />
    </div>
  </Router>
);


window.analystratings = analystratings;

// ReactDOM.render(<App />, document.getElementById('app'));