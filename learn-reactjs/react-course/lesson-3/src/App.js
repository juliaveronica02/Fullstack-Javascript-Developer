import React, { Component } from 'react'
import HighScore from "./highScore"
import "./css/style.css"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      overTen: false
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count +1})
  }

  componentDidUpdate(props, state) {
    if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
      console.log("updating over ten");
      this.setState({overTen: true})
    }
  }

  // resetCount method/function.
  resetCount = (e) => {
    // reset the state to count is zero and overTen equals false.
    console.log("Event is", e);
    this.setState({
      count :0,
      overTen: false
    })
  }

  render() {
    let {count} = this.state
    return (
      <div>
        <h1>Clicked the button {count} time</h1>
        <HighScore
          // create property "overTen" and set it to this.state.overTen.
          overTen = {this.state.overTen}
          // onReset = {(e) => this.resetCount(e)}
          // we can do the same like highScore.js.
          // because this method takes in the event and the initiating button emits the event as the single parameter.
          onReset = {this.resetCount}
          // the event still passed.
          // this working with properties both methods and variables.
          // this is part of the reason why react can be so fun to work because it manages all the re-rendering.
        />
      <span>
        <button onClick={() => this.handleClick()}>Click Count</button>
      </span>
      </div>
    )
  }
}
