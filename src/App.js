import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from './Components/Form/Form';
import Login from './Components/Login/Login';
import MatchMonster from './Components/Match/MatchMonster';
import MatchHuman from './Components/Match/MatchHuman';
import FormHuman from './Components/Form/FormHuman';
import FormMonster from './Components/Form/FormMonster';
import Card from './Components/Card/Card'
import './App.css';
import './Components/Common.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/form' component={Form}/>
            <Route path='/card' component={Card}/>
            <Route path='/formhuman' component={FormHuman}/>
            <Route path='/formmonster' component={FormMonster}/>
            <Route path='/matchuman' component={MatchHuman}/>
            <Route path='/matchmonster' component={MatchMonster}/>
            <MatchMonster/>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
