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
import About from './container/aboutus'
import Invest from './container/invest'
import Login from './container/login'
import Admin from './container/useradmin'

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

                  <Route path='/about' exact>
                        <About />
                  </Route>

                  <Route path='/invest' exact>
                        <Invest />
                  </Route>

                  <Route path='/login' exact>
                        <Login />
                  </Route>

                  <Route path='/dashboard' exact>
                        <Admin />
                  </Route>

                  
                  
                  
            </Switch>
    </React.Fragment>
    
  );
}

export default App;
