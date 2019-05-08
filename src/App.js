import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='header-background'>
        <header>
          <div id="logo-container">
            <img src="../Images/paw.png" />
            <h4>PupCity</h4>
          </div>

          <nav>
            <ul>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
