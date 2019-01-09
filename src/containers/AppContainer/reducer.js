const initialState = {
	app: {
		name: 'test',
		greeting: 'Hello World!',
	},
};

export default function AppContainerReducer(state = initialState, action) {
	switch (action.type) {
	case 'TEST':
		return state;
	default:
		return state;
	}
}
