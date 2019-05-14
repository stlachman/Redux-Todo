import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

class TodoList extends React.Component {

  toggleTodo = index => {
    this.props.toggleTodo(index);
  }

  deleteTodo = index => {
    this.props.deleteTodo(index);
  }

	render() {
		return (
			<ul>
				{this.props.todos.map((item, index) => (
          <div key={index}>
            <li
              key={index}
              style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
              onClick={() => this.toggleTodo(index)}
            >
              {item.value}
            </li>
            <button onClick={() => this.deleteTodo(index)}>Delete Todo</button>
          </div>
				))}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
