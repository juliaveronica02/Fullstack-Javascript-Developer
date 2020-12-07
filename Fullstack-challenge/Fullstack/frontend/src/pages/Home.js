import React, { Component } from "react";
import Form from "./Form"
import List from "./List"
// import Change from "./Change"

class Home extends Component {
    render() {
      return (
        <div>
          <Form />
          <List />
          {/* <Change/> */}
        </div>
      );
    }
  }
  
  export default Home;