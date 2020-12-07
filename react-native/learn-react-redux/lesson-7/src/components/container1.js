import React, {Component} from "react"

class Container1 extends Component {
    // constructor function is not react specific or even ES6 it's parts of vanilla javascript.
    // constructor function initialize is the class next we pass props as an argument.
    constructor(props) {
        // super is part of vanilla javascript and required code.
        // super props lets us access the properties in functions in the parent class (component).
        super(props)
        // initialize our state is created by using this.state.
        this.state = {
            // stateprops1 is the properties and set value as string ("").
            stateprops1: "Our Initial State"
        }
    }
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                {this.state.stateprops1}
            </div>
        )
    }
}

export default Container1;