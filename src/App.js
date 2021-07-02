import React from 'react'
import { Route , Switch } from 'react-router-dom';

import './App.css'
import Choice from './container/choice'
import Comparison from './container/comparisonApp'
import Education from './container/snowboardEducation'
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
            <Route path='/snowboardeducation'>
                  <Education />
            </Route>

        </Switch>
    </React.Fragment>
    
  );
}

export default App;
