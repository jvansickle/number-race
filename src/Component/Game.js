import React, { Component } from 'react'
import Score from './Score'
import Number from './Number'
import StartButton from './StartButton'
import Timer from '../Timer';

export default class Game extends Component {
    _timer;

    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            wins: 0,
            losses: 0,
            fastestTime: 1000,
            number1: 1,
            number2: 2,
            started: false
        };

        this._timer = new Timer((centiseconds) => this.timerTicked(centiseconds));
    }

    render() {
        if (this.state.started) {
            return (
                <div>
                    <p>Pick the larger number!</p>
                    <Number
                        value={this.state.number1}
                        click={() => this.evaluateWin(this.state.number1)} />
                    <Number
                        value={this.state.number2}
                        click={() => this.evaluateWin(this.state.number2)} />
                    <Score
                        time={this.state.time}
                        wins={this.state.wins}
                        losses={this.state.losses}
                        fastestCorrectTime={this.state.fastestTime} />
                </div>
            );
        }
        else {
            return (
                <StartButton click={() => this.startGame()} />
            );
        }
    }

    evaluateWin(selectedNumber) {
        this._timer.stop();

        let num1 = this.state.number1;
        let num2 = this.state.number2;

        // If the numbers were equal, its a win
        if (num1 === num2) {
            this.setState({
                time: this.state.time,
                wins: this.state.wins + 1,
                losses: this.state.losses,
                fastestTime: Math.min(this.state.fastestTime, this._timer._centiseconds),
                number1: this.getRandom(),
                number2: this.getRandom(),
                started: true
            });
        }
        // User picked number 1, and number 1 was larger
        else if (selectedNumber === num1 && num1 > num2) {
            this.setState({
                time: this.state.time,
                wins: this.state.wins + 1,
                losses: this.state.losses,
                fastestTime: Math.min(this.state.fastestTime, this._timer._centiseconds),
                number1: this.getRandom(),
                number2: this.getRandom(),
                started: true
            });
        }
        // User picked number 2, and number 2 was larger
        else if (selectedNumber === num2 && num2 > num1) {
            this.setState({
                time: this.state.time,
                wins: this.state.wins + 1,
                losses: this.state.losses,
                fastestTime: Math.min(this.state.fastestTime, this._timer._centiseconds),
                number1: this.getRandom(),
                number2: this.getRandom(),
                started: true
            });
        }
        // Else the user was wrong!
        else {
            this.setState({
                time: this.state.time,
                wins: this.state.wins,
                losses: this.state.losses + 1,
                fastestTime: this.state.fastestTime,
                number1: this.getRandom(),
                number2: this.getRandom(),
                started: true
            });
        }

        this._timer.reset();
        this._timer.start();
    }

    startGame() {
        console.log("Started game!");

        this.setState({
            time: this.state.time,
            wins: 0,
            losses: 0,
            fastestTime: this.state.fastestTime,
            number1: this.getRandom(),
            number2: this.getRandom(),
            started: true
        });

        this._timer.start();
    }

    timerTicked(centiseconds) {
        this.setState({
            time: centiseconds,
            wins: this.state.wins,
            losses: this.state.losses,
            fastestTime: this.state.fastestTime,
            number1: this.state.number1,
            number2: this.state.number2,
            started: this.state.started
        });
    }

    getRandom() {
        const max = 100;
        const min = 0
        return Math.floor(Math.random() * (max - min) + min);
    }
}