import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1. Example (uncoment this below if you want to see the result).
// ReactDOM.render(
//  <h1>Hello world, My name is Julia Veroncia!</h1>,
//   document.getElementById("root")
// );

// 2. Example JSX.
const user = {
  name: "Julia Veronica",
  email: "1931154.julia@uib.edu",
};
// const element = <h1>Hello world, my name is {user.name}, and email {user.email}! Nice to meet you :) </h1> // JSX.
// or we can use below code.
const element = (
  // div is means division on HTML file.
  // <div> // without className inside div.
  /* Add hello className into css file */
  <div className="hello">
    <h1>Hello world!</h1>
    <h2>
      My name is {user.name}, and email {user.email}! Nice to meet you :)
    </h2>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
