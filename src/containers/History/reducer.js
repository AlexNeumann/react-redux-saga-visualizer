import {
	MARKET_CHANGE_FILTER,
	SEND_SEARCH_FRUITS,
	RECEIVE_SEARCH_FRUITS,
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
	case MARKET_CHANGE_FILTER: {
		const newEntry = {
			type: 'action',
			name: MARKET_CHANGE_FILTER,
			key: action.filterName,
			value: action.value,
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
	default:
		return state;
	}
}
