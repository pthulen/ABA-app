import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimerControls from './TimerControls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>The ABA App</h3>
        <p>Time</p>
        <TimerControls />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
