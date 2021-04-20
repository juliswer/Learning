import React from 'react';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
