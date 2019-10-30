import React from 'react';


import FormMonster from './Components/Form/FormMonster';
import Login from './Components/Login/Login';


import './App.css';
import './Components/Common.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormMonster/>
        <Login />
      </header>
    </div>
  );
}

export default App;
