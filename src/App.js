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
import Getstarted from './container/get_started';
import About from './container/aboutus'
import Invest from './container/invest'
import Support from './container/support'
import Login from './container/login'
import Forget from './container/forget'
import Register from './container/register'
import Admin from './container/useradmin'
import SnackbarProvider from 'react-simple-snackbar'

// private route
import PrivateRoute from './route/PrivateRoute';
import Comingsoon from './container/comingsoon';

function App() {


  return (
    <React.Fragment>

   
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
                        <SnackbarProvider>
                        <Chooseboard />
                        </SnackbarProvider>
                  </Route>

                  <Route path='/about' exact>
                        <SnackbarProvider>
                        <About />
                        </SnackbarProvider>
                  </Route>

                  <Route path='/invest' exact>
                        <SnackbarProvider>
                              <Invest />
                        </SnackbarProvider>
                  </Route>

                  <Route path='/support' exact>
                  <SnackbarProvider>
                        <Support />
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

                  <Route path='/forget' exact>
                        <SnackbarProvider>
                              <Forget />
                        </SnackbarProvider>
                  </Route>

                  

                  <PrivateRoute path='/dashboard' exact>
                        <SnackbarProvider>
                              <Admin />
                        </SnackbarProvider>
                  </PrivateRoute>
            </Switch>


    </React.Fragment>
    
  );
}

export default App;
