import {
	MARKET_CHANGE_FILTER,
	SEND_SEARCH_FRUITS,
	RECEIVE_SEARCH_FRUITS,
	FAILED_SEARCH_FRUITS,
	DISMISS_ERROR,
} from '../FruitMart/constants';

import { HISTORY_CLEAR_LOG } from './constants';


const initialState = {
	history: [
		{
			type: 'action',
			name: 'EXAMPLE_ACTION',
			key: 'hello',
			value: 'world',
			sagaListener: false,
		},
	],
};

export default function HistoryReducer(state = initialState, action) {
	switch (action.type) {
	case HISTORY_CLEAR_LOG:
		return initialState;
	case DISMISS_ERROR: {
		const newEntry = {
			type: 'utility',
			name: DISMISS_ERROR,
			message: 'Error dismissed...',
		};
		return {
			...state,
			history: [
				...state.history, newEntry,
			],
		};
	}
	case MARKET_CHANGE_FILTER: {
		let { value } = action;
		if (action.value === true) {
			value = 'true';
		}	else if (action.value === false) { value = 'false'; }
		const newEntry = {
			type: 'action',
			name: MARKET_CHANGE_FILTER,
			key: action.filterName,
			value,
			sagaListener: false,
		};
		return {
			...state,
			history: [
				...state.history, newEntry,
			],
		};
	}
	case SEND_SEARCH_FRUITS: {
		const newEntry = {
			type: 'saga',
			subType: 'send',
			name: SEND_SEARCH_FRUITS,
			message: 'Searching for items...',
		};
		return {
			...state,
			history: [
				...state.history, newEntry,
			],
		};
	}
	case RECEIVE_SEARCH_FRUITS: {
		const newEntry = {
			type: 'saga',
			subType: 'receive',
			name: RECEIVE_SEARCH_FRUITS,
			message: 'Received search results!',
		};
		return {
			...state,
			history: [
				...state.history, newEntry,
			],
		};
	}
	case FAILED_SEARCH_FRUITS: {
		const newEntry = {
			type: 'saga',
			subType: 'failed',
			name: FAILED_SEARCH_FRUITS,
			message: 'Server request failed.',
		};
		return {
			...state,
			history: [
				...state.history, newEntry,
			],
		};
	}
	default:
		return state;
	}
}
