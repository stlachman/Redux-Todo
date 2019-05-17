import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../actions';

const Container = styled.div`
	max-width: 420px;
	margin: 3rem auto 2rem;
	text-align: center;
`;

const Input = styled.input`
  border: 0;
  padding: 0.2rem 0.3rem;
  border-bottom: 0.2rem solid black;
  display: block;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  transition: 0.3s all ease-in-out;
  &:focus {
    outline: none;
    border-bottom: 0.2rem solid #333;
  }
`;

const Button = styled.button`
	background: #333399;
	font-size: 1.3rem;
	padding: .5rem 1.5rem;
	border: 0;
	color: #f9f9f9;
  transition: 0.2s opacity ease-in;
  border-radius: 12px;
  font-weight: bold;
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;


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
			<Container>
				<form onSubmit={this.handleSubmit}>
					<Input
						type="text"
						name="description"
						placeholder="Pick up groceries..."
						value={this.state.description}
						onChange={this.handleChange}
					/>
					<Button>Add Todo</Button>
				</form>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { addTodo /* same as addTodo: addTodo */ })(TodoForm);
