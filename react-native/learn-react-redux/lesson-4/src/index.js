import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class UserDetail extends React.Component {
  render() {
    return (
      <div className="userDetail">
        <p>Name: {this.props.name} </p>
        <p>Email: {this.props.email} </p>
        <p>Email: </p>
      </div>
    );
  }
}

class OtherInformation extends React.Component {
  render() {
    return(
      <div className="otherInfo">
          <p>Other information: {this.props.otherInformation} </p>
        </div>
    )
  }
}

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <UserDetail name={this.props.name}/>
        <OtherInformation otherInformation={this.props.otherInformation} />
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
