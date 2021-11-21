import React from 'react';
import './App.css';
import { Draw } from './draw';
import { Header } from './header'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Draw />
      </header>
    </div>
  );
}

export default App;
