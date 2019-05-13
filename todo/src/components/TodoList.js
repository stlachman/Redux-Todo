import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import Todo from './Todo';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((item, index) => <Todo todo={item} key={index} onClick={() => toggleTodo(index)} />)}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { toggleTodo })(TodoList);
