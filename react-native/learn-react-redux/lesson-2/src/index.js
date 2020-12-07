import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// define function userInfo with props (component).
function UserInfo(props) {
  // props means properties of component.
  return (
    <div>
      {/* define component as javascript function. */}
      <p>name: {props.name} </p>
    </div>
  );
}

// 1. example.
// ReactDOM.render(<userInfo name="Julia" />, document.getElementById("root"));

// 2.example.
const element = <UserInfo name="Julia" />
ReactDOM.render( element, document.getElementById("root"));
