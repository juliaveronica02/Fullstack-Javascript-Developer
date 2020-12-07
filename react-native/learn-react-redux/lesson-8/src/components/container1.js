import React, { Component } from "react";
import Component1 from "../functions/function1"

class Container1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateProps1: "Our initial state!",
      stateProps2: 5,
    };
  }

  changeState3 = () => {
    this.setState({
      stateProps2: this.state.stateProps2 + 1,
      stateProps1: this.state.stateProps1 + "L",
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeState3()}> changeState3</button>
        <br />
        <Component1 prop1={this.state.stateProps1} />
      </div>
    );
  }
}

export default Container1;
