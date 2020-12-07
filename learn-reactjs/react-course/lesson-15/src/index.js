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

  // save function.
  save = () => {
    this.props.onChange(this.refs.newText.value, this.props.id); // change before text to new value by id.
    this.setState({ editing: false }); // after save can't edit.
  };

  // delete function.
  delete = (id) => {
    this.props.onRemove(this.props.id); // delete by id.
  };
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
      notes: [],
    };
  }

  // function id.
  nextId = () => {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }
  
  // add function.
  add = (text) => {
    var notes = [
      ...this.state.notes,
      {
        id: this.nextId(),
        note: text
      }
    ]
    this.setState({notes})
  }

  update = (newText, id) => {
    var notes = this.state.notes.map((note) =>
      note.id !== id
        ? note
        : {
            ...note, // show data inside the note.
            note: newText,
          }
    );
    this.setState({ notes });
  };
  // remove function (delete).
  remove = (id) => {
    var notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

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
    return (<div className="board">
      {this.state.notes.map(this.eachNote)}
      <button onClick={() => this.add()}>+</button>
      </div>)
  }
}

ReactDOM.render(<Board count={10} />, document.getElementById("root"));
serviceWorker.unregister();