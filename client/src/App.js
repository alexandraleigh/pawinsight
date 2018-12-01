import React, { Component } from 'react';
import './App.css';
import AnimalsContainer from './components/AnimalsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Paw Insight</h1>
        </header>
        <AnimalsContainer />
      </div>
    );
  }
}

export default App;
