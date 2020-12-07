import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// class method (define component ES6 class).
class UserInfo extends React.Component {
  render() {
    return (
      // 2 div inside 1 div.
      <div>
        {/* 1. div. */}
        <div className="userDetail">
          {/* props is a property of class. */}
          <p>Name: {this.props.name} </p>
          <p>Email: {this.props.email} </p>
        </div>
        {/* 2. div. */}
        <div className="otherInfo">
          <p>Other information: {this.props.otherInformation} </p>
        </div>
      </div>
    );
  }
}

const element = (
  <UserInfo
    name="Julia"
    email="1931154.julia@uib.edu"
    otherInformation="nope"
  />
);
ReactDOM.render(element, document.getElementById("root"));
