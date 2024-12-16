// src/App.js
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Greeting />
      <hr />
      <Counter />
    </div>
  );
}

export default App;