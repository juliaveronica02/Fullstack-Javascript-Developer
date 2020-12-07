import React, {Component} from "react"

class Container1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateprops1: "Our Initial State"
        }
    }

    // wrong mutate function.
    changeState = () => {
        this.state.stateprops1 = "new state!"
    } 
    // result when run: Line 13:9:  Do not mutate state directly and must use Use setState() method.
    // wrong way to update state.

    render() {
        return(
            <div>
                {/* call changeState inside button. */}
                <button onClick={() => this.changeState()}> changeState </button>
                <h1>Hello World!</h1>
                {this.state.stateprops1}
            </div>
        )
    }
}

export default Container1;