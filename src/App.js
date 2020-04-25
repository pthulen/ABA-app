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
        <p>Timer</p>
        <TimerControls />
        <p>Behaviors</p>
        <Behaviors />
      </header>
    </div>
  );
}

export default App;
