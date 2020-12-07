import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        React
        {true ? <div> Condition1 </div> : <div> Condition2 </div>}
      </div>
    );
  }
}
export default App;
