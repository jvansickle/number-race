import React from 'react'
import './Number.css'

export default class Number extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.click}>
                {this.props.value}
            </button>
        );
    }
}