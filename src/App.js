import React from 'react';

// import Form from './Components/Form/Form';
// import Login from './Components/Login/Login';
// import Profil from './Components/Profil/Profil';
import MatchMonster from './Components/Match/MatchMonster';
import MatchHuman from './Components/Match/MatchHuman';
import Experience from './Components/Experience/Experience';
import FormHuman from './Components/Form/FormHuman';
import FormMonster from './Components/Form/FormMonster';

import Card from './Components/Card/Card'
import Swipe from './Components/Card/Swipe'
import Button from './Components/Card/Button'


import './App.css';
import './Components/Common.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Swipe/>
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
