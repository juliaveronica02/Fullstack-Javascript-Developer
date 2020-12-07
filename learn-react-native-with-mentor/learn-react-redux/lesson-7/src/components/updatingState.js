import React, {Component} from "react"

class Container1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateprops1: "Our Initial State",
            stateProps2:5
        }
    }

    // valid syntax to update state.
    changeState = () => {
        // 1. Example.
        // changingState by reference prevState (previous state)
        // this.setState((prevState, props) => ({
        //     stateProps2: prevState.stateProps2 + 1
        // }))
        // 2. Example.
        // without passing prevState in as argument.
        this.setState({stateProps2: this.state.stateProps2 + 1})
    } 

    render() {
        return(
            <div>
                <button onClick={() => this.changeState()}> changeState </button>
                {this.state.stateProps2}
            </div>
        )
    }
}

export default Container1;