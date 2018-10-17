import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        return(
            <div>
                <div>{this.props.wins} wins</div>
                <div>{this.props.losses} losses</div>
                <div>{this.props.fastestCorrectTime}s fastest time</div>
            </div>
        )
    }
}