import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleTodo, deleteTodo, clearCompletedTodos } from '../actions';

const Container = styled.div`
	max-width: 420px;
	margin: 5rem auto 2rem;
	text-align: center;
`;

const Title = styled.h1`
	margin: 0 0 2rem;
	font-size: 3rem;
`;

const List = styled.ul`
	padding-left: 0;
	list-style: none;
	margin: 0 0 3rem;
`;

const ListItemContainer = styled.div`margin: 0 0 1.5rem;`;

const ListItem = styled.li`
	font-size: 1.8rem;
	margin: 0 0 1rem;
`;

const Button = styled.button`
	background: #CCCCCC;
	font-size: 1.6rem;
	padding: .5rem 1.5rem;
	border: 0;
	border-radius: 12px;
	color: #f9f9f9;
  transition: 0.2s opacity ease-in;
  font-weight: bold;
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

const RedButton = styled(Button)`
  background: #FF0033;
  font-size: 1.4rem;
`;

class TodoList extends React.Component {
	toggleTodo = (index) => {
		this.props.toggleTodo(index);
	};

	deleteTodo = (index) => {
		this.props.deleteTodo(index);
	};

	clearCompleted = (event) => {
		event.preventDefault();
		this.props.clearCompletedTodos();
	};

	render() {
		return (
			<Container>
				<Title>Todo App</Title>
				<List>
					{this.props.todos.map((item, index) => (
						<ListItemContainer key={index}>
							<ListItem
								key={index}
								style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
								onClick={() => this.toggleTodo(index)}
							>
								{item.value}
							</ListItem>
							<RedButton onClick={() => this.deleteTodo(index)}>Delete Todo</RedButton>
						</ListItemContainer>
					))}
				</List>
				<Button onClick={this.clearCompleted}>Clear Completed</Button>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { toggleTodo, deleteTodo, clearCompletedTodos })(TodoList);
