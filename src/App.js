import React from 'react';
import Form from './Components/Form/Form';
import Login from './Components/Login/Login';
import './App.css';
import './Components/Common.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <Login />
      </header>
    </div>
  );
}

export default App;
