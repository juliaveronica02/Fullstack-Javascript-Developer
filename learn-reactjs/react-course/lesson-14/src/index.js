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
  // edit function.
  edit = () => {
    this.setState({ editing: true }); //when press edit, it was true.
  };

  // save function (attach update function).
  save = () => {
    this.props.onChange(this.refs.newText.value, this.props.id); // change before text to new value by id.
    this.setState({ editing: false }); // after save can't edit.
  };

  // delete function (attach remove function).
  delete = (id) => {
    this.props.onRemove(this.props.id); // delete by id.
  }
  // show the form.
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
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

ReactDOM.render(<Note>Hello World!</Note>, document.getElementById("root"));
serviceWorker.unregister();

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // object inside array.
      notes: [
        { id: 0, note: "Call Noted" },
        { id: 1, note: "Make Prototype" },
        { id: 2, note: "Submit Noted" },
        { id: 3, note: "Send editing" },
      ],
    };
  }

  // update is going to update that review is going to find that specific data in each note.
  // update function and have newText and id as parameter.
  update = (newText, id) => {
    // notes variable.
    var notes = this.state.notes.map((note) =>
    // if it is not, we going to return a note or it's going to push all the data inside the note.
      note.id !== id
        ? note
        : {
            ...note, // show data inside the note.
            note: newText, // set new text to note.
          }
    );
    this.setState({ notes });
  };
  // remove function (delete).
  remove = (id) => {
    var notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

  // create a specific note whenever a new node is created.
  // eachNote function.
  eachNote = (note) => {
    return (
      <Note
        key={note.id}
        id={note.id}
        onChange={this.update}
        onRemove={this.remove}
      >
        {note.note}
      </Note>
    );
  };

  render() {
    return <div className="board">{this.state.notes.map(this.eachNote)}</div>;
  }
}

ReactDOM.render(<Board count={10} />, document.getElementById("root"));
serviceWorker.unregister();
