import { ADD_TODO } from "../actions";

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
			return Object.assign({}, state, {
				todos: [
					...state.todos,
					{
						value: action.payload,
						completed: false
					}
				]
			});
		default:
			return state;
	}
};
