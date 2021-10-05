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
import Register from './container/register'
import Admin from './container/useradmin'
import SnackbarProvider from 'react-simple-snackbar'

// private route
import PrivateRoute from './route/PrivateRoute';
import Comingsoon from './container/comingsoon';

function App() {


  return (
    <React.Fragment>

          {window.innerWidth > 800 ?
            <Switch>
                  <Route path='/' exact>
                        <SnackbarProvider>
                              <Comparison />
                        </SnackbarProvider>
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
                        <SnackbarProvider>
                              <Invest />
                        </SnackbarProvider>
                  </Route>

                  <Route path='/login' exact>
                        <SnackbarProvider>
                              <Login />
                        </SnackbarProvider>
                  </Route>

                  <Route path='/register' exact>
                        <SnackbarProvider>
                              <Register />
                        </SnackbarProvider>
                  </Route>

                  

                  <PrivateRoute path='/dashboard' exact>
                        <SnackbarProvider>
                              <Admin />
                        </SnackbarProvider>
                  </PrivateRoute>
            </Switch>

            : <Comingsoon/>

}
    </React.Fragment>
    
  );
}

export default App;
