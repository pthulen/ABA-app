import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimerControls from './TimerControls';
import Behaviors from './Behaviors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>The ABA App</h3>
        <p>Behaviors</p>
        <Behaviors />
        <p>Timer</p>
        <TimerControls />
      </header>
    </div>
  );
}

export default App;
