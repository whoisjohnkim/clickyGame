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
            this.setState({lastPick: id});
            this.shuffle();
        }
    }

    shuffle = () => {
        var array = this.state.order;
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.setState({order: array});
        console.log("Shuffle Time!");
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