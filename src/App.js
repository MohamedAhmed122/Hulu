import React from 'react';

import './App.css';
import Header from './Component/Header/header';
import Navbar from './Component/Navbar/navbar';
import Results from './Component/Results/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Results />
    </div>
  );
}

export default App;
