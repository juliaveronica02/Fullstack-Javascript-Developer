import React, { Component } from 'react'

export default class highScore extends Component {
    render() {
        // if statement.
        // to access the properties of high score component.
        if(this.props.overTen){
            return (
                <div>
                    <h3>Beat High Score of 10!
                        {/* reset button. */}
                        {/* capture the event and pass it to this.props.onReset. */}
                    {/* <button onClick={(e) => this.props.onReset(e)}>Reset</button> */}
                    {/* when hit ten or eleven, we able to reset the score. */}
                    {/* when we click this button it will going to reset the parent to zero "0" and overTen will be false. */}
                    {/* we can erase (e)* and have method name but don't pass in anything. */}
                    <button onClick={this.props.onReset}>Reset</button>
                    {/* it means this function takes in the event as a single parameter and define on App.js render <HighScore/> */}
                    </h3>
                    
                </div>
            )
        } else {
            // we need to use return from render method so we use else = null it's mean nothing.
            // if we comment "return null;" we will got error "nothing was returned from render ..." when we run on google chrome.
            return null;
        }
        
    }
}
