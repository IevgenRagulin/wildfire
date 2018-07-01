import React, { Component } from 'react';
import Header from './Header/Header';
// import SignUp from './SignUp.js';
import Witness from './Witness.js';
import Subscribe from './Subscribe.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />       
        <Witness />
        {/* <SignUp /> */}
        {/* <Subscribe /> */}
      </div>
    );
  }
}

export default App;
