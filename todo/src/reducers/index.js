const initialState = {
	items: [
		{
			id: 1528817077286,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1528817084358,
			text: 'Go to movies',
			completed: false
		}
  ],
  item: ''
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state
			};
		default:
			return state;
	}
};
