import React, { Component } from 'react';
import logo from './img/logo.gif';
import './App.css';
import Main from './components/Main'
import Nav from './components/Nav'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-top">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Bienvenue au vote de l'Assemblée de la CFDT</h2>
          </div>
          <Nav />
        </div>
        <div className="App-body">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
