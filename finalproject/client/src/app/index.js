import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from '../src/components/button.js';
import Input from '../src/components/Input/Input.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the GSU Student Orientation Attendance Page
        </p>
              <button class="button" href="/">Upload Student Orientation CSX/XCL</button>
              <button class="button" href="/">Mark Off Present/Attending Students</button>
        </header>
      </div>
  );
}

export default App;