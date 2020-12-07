import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      // we can add 
      overTen: false
    }
  }
  // to make it run we make a method called handleClick.
  handleClick = () => {
    // writing methods.
    // just see it do something.
    // console.log("Clicked"); // so, this is another built in method to the react component called setState.
    // to takas an object as a parameter and an optional callback but now we not use it "console.log("Clicked");".
    // we use the bellow code.
    // type this.setState using camel case and then pass it an objects.
     this.setState({count: this.state.count + 1}) // this object is going to be is the new state that we want to set.
    
  }

  componentDidUpdate(props,state){
    // we see updated from the old state, which is count equals zero.
    // console.log("update from", state, "to", this.state);
    // every time we press the button that event or the function gets called or triggered.
    // this.setState({count: this.state.count + 1}) // if we run this code at here it will error because limits the number.
    // so we use the bellow code.
    // the component is going to update and it's going over ten, so is going to trigger an error when the state gets updated to 11.
    // so we get the maximum depth exceeded.
    // if the state count is not the same as the new state count.
    if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
      console.log("updating over ten");
      this.setState({overTen: true})
    }
  }

  render() {
    // count variable from the state.
    let {count} = this.state
    return (
      <div>
        <h1>Click the Button {count} times</h1>
        {/* basic if statement (it kind inline way, we can use ternary).*/}
        {/* this will resolve to true or false. */}
        {/* if it is overTen */}
        {(this.state.overTen) ? 
        // then a semicolon otherwise null (we don't care).
        <h3>Beat high score of 10!</h3>
          : null
      }

        {/* <h3>Beat high score of 10!</h3> so we copy this to if statement.*/} 
        <span>
          {/* when click doesn't do anything because we haven't rigged. */}
          {/* {(e)} is mean pass or capture the event and send it over to this.handleClick(). */}
          {/* if we don't put (e) it's going to try this consistently it means the mounts calls the function and it doesn't do anything else.*/}
          {/* and if we don't have event we can just put brackets () and then the arrow => to pass it this.handleClick() function. */}
          <button onClick={(e) => this.handleClick()}>Click Me</button>
        </span>
      </div>
    )
  }
}
