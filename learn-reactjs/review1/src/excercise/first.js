import React, { Component } from "react";

export default class first extends Component {
  name = "Julia Veronica (class)";
  render() {
    // this below code can make error when run inside render.
    // name = "Julia Veronica";
    // but if we put code below using const it will work.
    const name = "Julia Veroncia using const (props)"
    return (
      <div>
        React <br />
        {this.name} <br/>
        {/* at here we just call {name} without this if we use cont, let or var inside render. */}
        {name}
      </div>
    );
  }
}
