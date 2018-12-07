import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import Animals from './Animals'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <ul>
              <li><Link to="/animals">Animals</Link></li>
            </ul>
            <hr/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/animals" component={Animals} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
