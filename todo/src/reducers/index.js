import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = {
	todos: [
		{
			value: 'Learn Redux',
			completed: false
		},
		{
			value: 'Go to movies',
			completed: false
		}
	]
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [
					...state.todos,
					{
						value: action.payload,
						completed: false
					}
				]
			};
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map((todo, index) => {
					return action.payload === index ? { ...todo, completed: !todo.completed } : todo;
					// Equivalent Logic
					// if (action.payload === index) {
					//   return {...todo, completed: !todo.completed}
					// } else {
					//   return todo;
					// }
				})
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo, index) => {
					return action.payload !== index;
				})
			};

		default:
			return state;
	}
};
