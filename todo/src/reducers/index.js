const initialState = {
	todos: [
		{
      id: 1528817084358,
			value: 'Learn Redux',
			completed: false
		},
		{
      id: 1528817077286,
			value: 'Go to movies',
			completed: false
		}
  ]
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
        ...state, 
      
			};
		default:
			return state;
	}
};
