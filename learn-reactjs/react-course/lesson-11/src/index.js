import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        {/* 1. Example */}
        {/* <h1> {this.props.text} </h1>
        <p>Welcome to our first react component.</p> */}
        {/* 2. Example */}
        <h1> {this.props.text} </h1>
        <p> {this.props.children} </p> 
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    {/* 1. Example. */}
    {/* <MyComponent text="Bye World" />
    <MyComponent text="Hello World" />
    <MyComponent text="Welcome World" /> */}
    {/* 2. Example */}
    <MyComponent text="Bye World!">Message One</MyComponent>
    <MyComponent text="Hello World!">Message Two</MyComponent>
    <MyComponent text="Welcome World!">Message Three</MyComponent>
  </div>,
  document.getElementById("root")
);
serviceWorker.unregister();
