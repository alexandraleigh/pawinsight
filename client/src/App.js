import React, { Component } from 'react';
import './stylesheets/App.scss';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
