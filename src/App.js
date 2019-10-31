import React from 'react';

import Form from './Components/Form/Form';
import Login from './Components/Login/Login';
import Profil from './Components/Profil/Profil';
import MatchMonster from './Components/Match/MatchMonster';
import MatchHuman from './Components/Match/MatchHuman';
import Experience from './Components/Experience/Experience';
import FormHuman from './Components/Form/FormHuman';
import FormMonster from './Components/Form/FormMonster';


import './App.css';
import './Components/Common.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormHuman/>
        <FormMonster/>
        <Experience/>
        <MatchHuman/>
        <MatchMonster/>
      </header>
    </div>
  );
}

export default App;
