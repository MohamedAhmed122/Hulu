import React, { useState } from 'react';

import './App.css';
import Header from './Component/Header/header';
import Navbar from './Component/Navbar/navbar';
import Results from './Component/Results/Results';

function App() {
  const [selectedOption, setSelectedOption] = useState('')
  return (
    <div className="App">
      <Header />
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
