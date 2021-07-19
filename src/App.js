import React from 'react'
import { Route , Switch} from 'react-router-dom';

import './App.css'
import Choice from './container/choice'
import Comparison from './container/comparisonApp'
import Education from './container/snowboardEducation'
import Boardcomponent from './container/Education/board-component'
import ConditionAffect from './container/Education/conditionaffect'
import Riderstyle from './container/Education/riderstyle'
import Chooseboard from './container/Education/chooseaboard'

function App() {
  return (
    <React.Fragment>
    
            <Switch>
                  <Route path='/' exact>
                        <Choice />
                  </Route>
                  <Route path='/comparisonapp' exact>
                        <Comparison />
                  </Route>
                  <Route path='/snowboardeducation' exact>
                        <Education />
                  </Route>

                  <Route path='/snowboardeducation/boardcomponent' exact>
                        <Boardcomponent />
                  </Route>

                  <Route path='/snowboardeducation/ConditionAffect' exact>
                        <ConditionAffect />
                  </Route>

                  <Route path='/snowboardeducation/riderstyle' exact>
                        <Riderstyle />
                  </Route>

                  <Route path='/snowboardeducation/chooseboard' exact>
                        <Chooseboard />
                  </Route>
                  
                  
            </Switch>
    </React.Fragment>
    
  );
}

export default App;
