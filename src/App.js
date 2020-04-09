import React from 'react';
import './App.css';
import Navbar from './core/Nav/Navbar';
import Routes from './core/Routes/Routes';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="App container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
