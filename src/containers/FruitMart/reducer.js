import {
	MARKET_CHANGE_FILTER,
	SEND_SEARCH_FRUITS,
	RECEIVE_SEARCH_FRUITS,
	FAILED_SEARCH_FRUITS,
	DISMISS_ERROR,
} from './constants';

const initialState = {
	eventHandling: {
		isSending: false,
		isFirstSearch: true,
		requestFailed: false,
	},
	searchFilter: {
		type: 'both',
		color: 'any',
		searchString: '',
		forceFail: false,
	},
	items: [],
};

export default function FruitMartReducer(state = initialState, action) {
	switch (action.type) {
	case MARKET_CHANGE_FILTER:
		return {
			...state,
			searchFilter: {
				...state.searchFilter,
				[action.filterName]: action.value,
			},
		};
	case SEND_SEARCH_FRUITS:
		return {
			...state,
			eventHandling: {
				...state.eventHandling,
				isSending: true,
				isFirstSearch: false,
				requestFailed: false,
			},
			items: [],
		};
	case RECEIVE_SEARCH_FRUITS:
		return {
			...state,
			eventHandling: {
				...state.eventHandling,
				isSending: false,
			},
			items: action.items,
		};
	case FAILED_SEARCH_FRUITS:
		return {
			...state,
			eventHandling: {
				...state.eventHandling,
				isSending: false,
				requestFailed: true,
			},
			items: [],
		};
	case DISMISS_ERROR:
		return {
			...state,
			eventHandling: {
				...state.eventHandling,
				requestFailed: false,
			},
		};
	default:
		return state;
	}
}
