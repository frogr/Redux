import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ToDoList extends Component {
  renderToDo() {
    return this.props.todo.map((todo, i) => {
      return (

      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
