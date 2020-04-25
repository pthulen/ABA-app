import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimerControls from './TimerControls';
import Behaviors from './Behaviors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>The ABA App</h3>
        <p>Time</p>
        <TimerControls />
        <Behaviors />
      </header>
    </div>
  );
}

export default App;
