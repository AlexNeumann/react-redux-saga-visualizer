import {
	MARKET_CHANGE_FILTER,
	SEND_SEARCH_FRUITS,
	RECEIVE_SEARCH_FRUITS,
	FAILED_SEARCH_FRUITS,
} from './constants';

export const actionChangeFilter = (filterName, value) => ({
	type: MARKET_CHANGE_FILTER,
	filterName,
	value,
});

export const actionSendSearchFruits = (searchParams) => ({
	type: SEND_SEARCH_FRUITS,
	searchParams,
});

export const actionReceiveSearchFruits = (items) => ({
	type: RECEIVE_SEARCH_FRUITS,
	items,
});

export const actionFailedSearchFruits = () => ({
	type: FAILED_SEARCH_FRUITS,
});
