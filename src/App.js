import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import Header from './shared/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Main />} />
        <Route path='/:shipId' render={() => <Details />} />
      </Switch>
    </>
  );
}

export default App;
