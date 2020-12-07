import React from 'react';
import './App.css';
import Component1 from "../functional/component1"
import Component2 from "../functional/component2"

function App() {
  return (
    <div className="App">
      <div className="App-header">
       <h2>Welcome to React with Redux project!</h2>
      </div>
      <p className="App-intro">
        <p>This is tutorial React app with redux.</p>
      </p>
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
