// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './views/Profile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profilee</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
