// to auto create using just type rcc.
import React, { Component } from 'react'

export default class Application extends Component {
    // react life circle.
    // contructor, which can take in props argument and it can instantiate the parent class.
    // this going to only run when the application component is instantiatedm not every time it re-renders.
    constructor(props) {
        super(props)
    }

    // so life cycle of component is basically a string of functions that get called to determine, based on variable changes.
    // whether something needs to be updated and re-rendered.
    // so there's the componentWillMount and this gets passed two arguments, the props that it will mount with props and state.
    componentWillMount(props, state){

    }

    // componentDidMount which also gets props and mount it.
    componentDidMount(props, state){
        // if we console.log mounted with props state and save it we can go back to our browser and look
        console.log("mounted with", props, state);
        // we can see on our google chrome console (press F12), the result is "mounted with undefined undefined".
        // also we can see we have a useless constructor as of right now because it doesn't actually do anything.
    }

    // componentWillReceiveProps is get called during a state change and takes in the props.
    // this actually gets called before it mounts, because it will receive properties when it mounts.
    componentWillReceiveProps(props) {

    }

    componentWillUpdate(props, state) {
        if (this.props.name !== props.name) {
            // do something.
        }
    }

    componentDidUpdate(props, state) {
        
    }

    render() {
        let name = "julia";
        return (
            // we can't in this return method have a top level element and then another top level element.
            // we will got error.
            // <h1>Hello World </h1>
            // <span>This</h1>
            // because in jsx expressions, this is E6 javascript.
            // so the current implemention must have one parent element.
            // this means we can only have one top level element.
            // so we going to wrap a both of these in a "div".
            <div>
                <h1>Hello World, {name}</h1>
                <span>this</span>
            </div>
            // when we save, we going to see it's going compile and the browser automatically refreshes.
            // this basically how to write a render method in our own component.
        )
    }
}

