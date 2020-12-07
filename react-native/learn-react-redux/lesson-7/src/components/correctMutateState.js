import React, {Component} from "react"

class Container1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateprops1: "Our Initial State"
        }
    }

    // correct mutate function.
    changeState = () => {
        // setState() method.
        // inside paranthesis () put curly branch {} to set the state property to any value.
        this.setState({stateprops1: "New State!"})
    } 

    render() {
        return(
            <div>
                {/* 1. example using button. */}
                <button onClick={() => this.changeState()}> changeState </button>
                {/* result: when press button on chrome will change to "New State!"*/}

                {/* 2. example using setState() method and is not recommend because it makes code readability worse. */}
                {/* calling setState() method inside a function makes our code much easier to read. */}
                {/* <button onClick={() => this.setState({stateprops1: "New State!"})}> changeState </button> */}
                <h1>Hello World!</h1>
                {this.state.stateprops1}
            </div>
        )
    }
}

export default Container1;