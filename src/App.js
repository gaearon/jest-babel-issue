import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const test = (string) => {
  const base = { base: true, value: string };
  return { ...base, extends: true };
}

class App extends Component {
  render() {
    const testString = test('This spread works');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <code>{JSON.stringify(testString)}</code>
        </p>
      </div>
    );
  }
}

export default App;
