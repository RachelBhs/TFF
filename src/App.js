import React from 'react';


import FormMonster from './Components/Form/FormMonster';
import LoginHuman from './Components/Login/LoginHuman';


import './App.css';
import './Components/Common.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormMonster/>
        <LoginHuman />
      </header>
    </div>
  );
}

export default App;
