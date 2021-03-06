import React from 'react'
import './Number.css'

export default function Number(props) {
    return <button
        className="NumberButton"
        onClick={props.click}>
        {props.value}
    </button>;
}