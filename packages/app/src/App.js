import React, { useEffect } from 'react';
import Component from '@example/component'
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    console.log("Running Hook from App")
  }, [])
  
  return (
    <div className="App">
      <Component />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
