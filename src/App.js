import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import SignUp from './SignUp.js';
import Witness from './Witness.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />       
        {/* <Witness />/ */}
        <SignUp />
      </div>
    );
  }
}

export default App;
