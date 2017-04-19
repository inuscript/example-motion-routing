import React, { Component } from 'react';
import './App.css';
import { ProgressBar } from "./Progress"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressBar progress={40} />
      </div>
    );
  }
}

export default App;
