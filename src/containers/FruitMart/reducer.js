import {
	MARKET_CHANGE_FILTER,
	SEND_SEARCH_FRUITS,
	RECEIVE_SEARCH_FRUITS,
	FAILED_SEARCH_FRUITS,
} from './constants';

const initialState = {
	eventHandling: {
		isSending: false,
		isFirstSearch: true,
	},
	searchFilter: {
		type: 'both',
		color: 'any',
		searchString: '',
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
	default:
		return state;
	}
}
