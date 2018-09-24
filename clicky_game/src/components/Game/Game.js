import React, { Component } from 'react';
import CharImage from '../CharImage/CharImage';
import champions from '../../champions.json'
import "./Game.css";

class Game extends Component {
    state = {
        order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        lastPick: -1
    }
    randomizeImages = id => {
        if(id === this.state.lastPick){
            console.log("Oh no you already clicked this before!");
        }
        else {
            this.setState({lastPick: id})
            console.log("Your new id is: " + id);
        }
    }

    render() {
      return (
        <div className="container">
            <div className="row">
            {
                this.state.order.map((index) => (
                    <div className="col-lg-3 col-sm-6">
                    <CharImage
                        name={champions[index].name}
                        image={champions[index].image}
                        id={champions[index].id}
                        key={champions[index].id}
                        clickFunction={this.randomizeImages}
                    />
                </div>
                ))
            }

            </div>
        </div>
      );
    }
  }


export default Game;