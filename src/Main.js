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
        <Route exact path='/' component={Home}/>
        <Route path='/witness-form' component={Witness}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default Main
