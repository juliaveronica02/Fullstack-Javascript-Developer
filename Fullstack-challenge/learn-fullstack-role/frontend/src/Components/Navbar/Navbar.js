import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class componentName extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-inverse sticky-top navbar-dark bg-info">
        <Link className="navbar-brand" href="#">
          Julia Veronica
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container">
            <ul className="navbar-nav text-danger ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  SingUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}