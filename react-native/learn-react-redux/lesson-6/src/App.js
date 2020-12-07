import React, {Component} from "react"
import Component1 from "./functional/component1"
import Container1 from "./components/container1"

class App extends Component {
  render() {
    return(
      <div className="App">
        React-Hooks-Class
        <Component1 name="julia" email="1931153.julia@uib.edu" age={25} age2="25" />
        <Container1 nickname="programming" />
      </div>
    )
  }
}

export default App;