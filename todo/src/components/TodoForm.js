import React from 'react';
import { postTodo } from '../actions'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      description: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="description" placeholder="Add Todo" value={this.state.description} onChange={this.handleChange}/>
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}


export default TodoForm;
