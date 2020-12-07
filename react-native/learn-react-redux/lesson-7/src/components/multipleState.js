import React, { Component } from "react";

// in updating state we did not have to set our first state props 1 when calling.
// react will merge the old state with the new state.
// this means if we change one property of state the others one are not affected.

class Container1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateProps1: "Our initial state!",
      stateProps2: 5,
    };
  }

  // props2.
  changeState = () => {
    this.setState({ stateProps2: this.state.stateProps2 + 1 });
  };
  // props1.
  changeState2 = () => {
    this.setState({ stateProps1: this.state.stateProps1 + "L" });
  };

  // combine props1 and props 2 just seperate with coma (,).
  // simple code.
  changeState3 = () => {
    this.setState({
      stateProps2: this.state.stateProps2 + 1,
      stateProps1: this.state.stateProps1 + "L",
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}> changeState </button>
        <button onClick={() => this.changeState2()}> changeState2 </button>
        <button onClick={() => this.changeState3()}> changeState3</button>
        <br />
        {this.state.stateProps2}
        <br />
        {this.state.stateProps1}
      </div>
    );
  }
}

export default Container1;
