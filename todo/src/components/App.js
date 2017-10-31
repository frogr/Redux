import React, { Component } from "react";
import {
  addtodo,
  switchComplete,
  removeItem,
  removeComplete
} from "../actions";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  displayList() {
    return this.props.todos.map((name, i) => {
      return (
        <div
          key={i}
          className={name.completed ? "completedItem" : "incompleteItem"}
        >
          <div onClick={() => this.swap(i)} key={i} className="click">
            - {name.text}{" "}
          </div>
          <button onClick={() => this.removeToDo(i)} className="space">
            {" "}
            <i class="fa fa-minus-square-o" aria-hidden="true" />
          </button>
        </div>
      );
    });
  }

  addItem(event) {
    event.preventDefault();
    this.props.addtodo(this.state.text);
    this.setState({ text: "" });
  }

  handleNewToDo(event) {
    event.preventDefault();
    this.setState({ text: event.target.value });
  }

  toDoFinished() {
    let truth = 0;
    for (let i = 0; i < this.props.todos.length; i++) {
      if (this.props.todos[i].completed) {
        truth += 1;
      }
    }
    if (truth === this.props.todos.length && truth !== 0) {
      return true;
    }
    return false;
  }

  removeToDo(i) {
    console.log(i);
    this.props.removeItem(i);
  }

  swap(i) {
    this.props.switchComplete(i);
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          <div className={this.toDoFinished() ? "done" : "hidden"}>
            <p>all done!</p>
          </div>
          <div
            className={
              this.props.todos.length === 7 &&
              this.props.todos[6].text === "struggle"
                ? "list2"
                : "list"
            }
          >
            <form onSubmit={this.addItem.bind(this)}>
              <input
                type="text"
                onChange={this.handleNewToDo.bind(this)}
                placeholder=" add todo"
                value={this.state.text}
                className="textInput"
              />
            </form>
            {this.displayList()}
          </div>
          <div>
            <button
              className={
                this.props.todos.length > 0
                  ? "btn btn-success remove"
                  : "hidden"
              }
              onClick={() => this.props.removeComplete()}
            >
              remove completed items
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

// export default App;
export default connect(mapStateToProps, {
  addtodo,
  switchComplete,
  removeItem,
  removeComplete
})(App);
