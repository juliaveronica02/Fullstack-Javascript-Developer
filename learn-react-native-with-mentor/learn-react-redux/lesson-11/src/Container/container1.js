import React, {Component} from "react"

import * as ACTION from "../actions/action"

import {connect} from "react-redux"

class Container1 extends Component {
    render() {
        return (
            <div>
                {/* we have 3 button. */}
                {/* 1. button just supposed to read current state. */}
                {/* our state is only made up of one property called stateprops1 with only two possible values. */}
                {/* our state is access with a mapState function and we can use the state in our render method. */}
                <button onClick={() => console.log(this.props.stateProps1)}>
                    Get State
                </button>
                {/* the next two buttons dispatch actions that will change the state with the map dispatch function.*/}
                {/* and we can dispatch actions by calling them in our render method with this.props. */}
                {/* the that we set in that method and our action are dispatched or run in reducer. */}
                <button onClick={() => this.props.action1()}>Dispatch Action1</button>
                <button onClick={() => this.props.action2()}>Dispatch Action2</button>
                <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button>
                <button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stateProps1: state.stateProps1
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(ACTION.SUCCESS),
        action2: () => dispatch(ACTION.FAILURE),
        action_creator1: () => dispatch(ACTION.success()),
        action_creator2: () => dispatch(ACTION.failure())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Container1)