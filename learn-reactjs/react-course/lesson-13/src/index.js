import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  // editing() {
  //   alert( 'Editing')
  // }
  edit = () => {
    this.setState({ editing: true });
  };
  // save function.
  save = () => {
    var val = this.refs.newText.value
    alert("The value will be stored as: " + val)
    this.setState({ editing: false });
  };

  delete() {
    alert("Deleting");
  }

  renderForm = () => {
    return (
      <div className="note">
        <textarea ref="newText"></textarea>
        <button onClick={this.save}>Save</button>
      </div>
    );
  };

  renderDisplay = () => {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          {/* 1. step make the button. */}
          {/* 2. make onclick inside button. */}
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.delete}>X</button>
        </span>
      </div>
    );
  };
  render() {
    if(this.state.editing) {
      return this.renderForm()
    }
    else{
      return this.renderDisplay()
    }
  }
}

ReactDOM.render(<Note>Hello World!</Note>, document.getElementById("root"));
serviceWorker.unregister();

// board props.
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        // basic notes (database).
        'Call Noted',
        'Make Prototype',
        'Submit Noted',
        'Send editing',
      ]
    }
  }
  render() {
    return(
      <div className="board">
        {/* {this.props.count} */}
        {/* inside map use note will get a specific note from the notes (constructor). */}
        {this.state.notes.map((note, item)=> {
          // show all the notes in browser.
          return <Note key={item}> {note} </Note>
        })}
      </div>
    )
  }
}

ReactDOM.render(<Board count={10} />, document.getElementById("root"));
serviceWorker.unregister();