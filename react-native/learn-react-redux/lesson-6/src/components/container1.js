import React, { Component } from "react";

class Container1 extends Component {
  render() {
    return (
      <div>
        Hello, I am class component!
        {/* in class we must use this before write the props. different with functional we just write props no need this. */}
        {this.props.nickname} 
      </div>
    );
  }
}

export default Container1;
