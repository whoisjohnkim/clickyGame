import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game/Game'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Clicky Game</span>
        </nav>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Leage of Legends Clicky Game!</h1>
            <p className="lead">Click on the Images below but be sure not to click on an image twice in a row!</p>
          </div>
        </div>
        <Game/>
      </div>
    );
  }
}

export default App;
