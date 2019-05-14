import { ADD_TODO, TOGGLE_TODO } from '../actions';

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
          if (action.payload === index) {
            return {...todo, completed: !todo.completed}
          } else {
            return todo;
          }
        })
      }
		default:
			return state;
	}
};
