import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            // css column calls cols from app.js button. 
            <div className={`column-${this.props.cols}`}>
                {/* calls symbol button from app.js */}
                <button className="calculator-button" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}
