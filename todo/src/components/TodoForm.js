import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: ''
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTodo(this.state.description);
		this.setState({
			description: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="description"
						placeholder="Add Todo"
						value={this.state.description}
						onChange={this.handleChange}
					/>
					<button>Add Todo</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { addTodo: addTodo })(TodoForm);
