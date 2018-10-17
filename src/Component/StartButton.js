import React, { Component } from 'react'

export default class StartButton extends Component {
    render() {
        return (
            <button onClick={this.props.click}>Start!</button>
        );
    }
}