import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter initCount={7} /> 
      </header>
    </div>
  );
}

export default App;
