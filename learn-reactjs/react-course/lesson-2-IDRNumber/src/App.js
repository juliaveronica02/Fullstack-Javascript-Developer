import React from 'react';
import logo from './logo.svg';
import './App.css';
import Increment from './Components/Increment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Increment/>
        </header>
    </div>
  );
}

export default App;