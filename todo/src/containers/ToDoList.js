import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo } from "../actions";

class ToDoList extends Component {
  renderToDo() {
    return this.props.todo.map((todo, i) => {
      return <li key={i}>{todo.todo}</li>;
    });
  }
  render() {
    return <ul>{this.renderToDo()}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToDo: addToDo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
