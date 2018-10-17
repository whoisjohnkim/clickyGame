import React, { Component } from 'react';
import './App.css';
import Game from './components/Game/Game'

class App extends Component {
  render() {
    return (
      <div>
          <div className="jumbo jumbotron jumbotron-fluid">

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
