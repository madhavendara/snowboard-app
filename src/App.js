import React from 'react'
import { Route , Switch } from 'react-router-dom';

import './App.css'
import Choice from './container/choice'
import Comparison from './container/comparisonApp'
function App() {
  return (
    <React.Fragment>
      <Switch>
      <Route path='/' exact>
          <Choice />
      </Route>
      <Route path='/comparisonapp'>
        <Comparison />
      </Route>
      </Switch>
{/* <Choice />
    <Comparison /> */}
    </React.Fragment>
    
  );
}

export default App;
