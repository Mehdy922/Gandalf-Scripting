import React from 'react';
import ExampleButton from './ExampleButton';
import logo from './logo.svg';  // Add this line to import the logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can keep the existing logo, text, and link */}
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

        {/* Add the ExampleButton component */}
        <ExampleButton />
      </header>
    </div>
  );
}

export default App;
