import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((item, index) => <li key={index}>{item.value}</li>)}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
