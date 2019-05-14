import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) =>  <li key={index} onClick={() => this.props.toggleTodo(index)}>{item.value}</li>)}
      </ul>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { toggleTodo })(TodoList);
