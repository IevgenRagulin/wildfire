import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp.js';
import Witness from './Witness.js';
import Subscribe from './Subscribe.js';
import { BrowserRouter } from 'react-router-dom'

const Main = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route path='/wildfire' component={Home}/>
        <Route path='/wildfire/witness-form' component={Witness}/>
        <Route path='/wildfire/signup' component={SignUp}/>
        <Route path='/wildfire/subscribe' component={Subscribe}/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default Main
